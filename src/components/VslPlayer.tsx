import { useEffect, useRef, useState } from "react";

const VIDEO_ID = "s7eixWBeBUw";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<any> | null = null;

function loadApi(): Promise<any> {
  if (typeof window === "undefined") return Promise.reject(new Error("ssr"));
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT);
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  });
  return apiPromise;
}

function fmt(t: number) {
  const s = Math.max(0, Math.floor(t));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export default function VslPlayer() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const hintTimer = useRef<number | undefined>(undefined);
  const [unmuted, setUnmuted] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [hint, setHint] = useState<"play" | "pause" | null>(null);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let tickId = 0;

    loadApi().then((YT) => {
      if (cancelled || !hostRef.current) return;
      playerRef.current = new YT.Player(hostRef.current, {
        videoId: VIDEO_ID,
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          playsinline: 1,
          origin: typeof window !== "undefined" ? window.location.origin : undefined,
        },
        events: {
          onReady: (e: any) => {
            e.target.mute();
            e.target.playVideo();
            setDuration(e.target.getDuration?.() || 0);
          },
          onStateChange: (e: any) => {
            if (e.data === 1) setPlaying(true);
            if (e.data === 2) setPlaying(false);
            if (e.data === 0) setPlaying(false);
          },
        },
      });

      const tick = () => {
        const p = playerRef.current;
        if (p?.getCurrentTime && p?.getDuration) {
          const d = p.getDuration() || 0;
          const c = p.getCurrentTime() || 0;
          setCurrent(c);
          setDuration(d);
          setProgress(d > 0 ? Math.min(100, (c / d) * 100) : 0);
        }
        tickId = window.setTimeout(tick, 250);
      };
      tick();
    });

    return () => {
      cancelled = true;
      window.clearTimeout(tickId);
      window.clearTimeout(hintTimer.current);
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* noop */
      }
    };
  }, []);

  const showHint = (kind: "play" | "pause") => {
    setHint(kind);
    window.clearTimeout(hintTimer.current);
    hintTimer.current = window.setTimeout(() => setHint(null), 700);
  };

  const enableSound = () => {
    const p = playerRef.current;
    if (!p) return;
    // Sequência estável: pausa -> volta ao início -> tira o mudo -> play com som.
    // Evita o loop de reinícios que acontecia ao dar seek e play ao mesmo tempo
    // enquanto o autoplay mudo ainda estava rodando.
    try {
      p.pauseVideo();
    } catch {
      /* noop */
    }
    p.seekTo(0, true);
    p.unMute();
    p.setVolume(100);
    // Pequeno atraso para o seek assentar antes de retomar a reprodução.
    window.setTimeout(() => {
      const pl = playerRef.current;
      if (!pl) return;
      pl.unMute();
      pl.setVolume(100);
      pl.playVideo();
    }, 120);
    setUnmuted(true);
    setPlaying(true);
  };

  const togglePlay = () => {
    const p = playerRef.current;
    if (!p) return;
    const state = p.getPlayerState?.();
    if (state === 1) {
      p.pauseVideo();
      setPlaying(false);
      showHint("pause");
    } else {
      p.playVideo();
      setPlaying(true);
      showHint("play");
    }
  };

  return (
    <div className="relative z-[1] mx-auto mb-[26px] max-w-[400px] rounded-3xl bg-navy p-[10px] shadow-[0_24px_50px_-20px_rgb(27_42_65/0.28)]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-[#0B1523]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            ref={hostRef}
            className="absolute top-1/2 left-1/2 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {unmuted ? (
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
            className="absolute inset-0 z-10 h-full w-full cursor-pointer bg-transparent"
          />
        ) : (
          <div className="absolute inset-0 z-10" aria-hidden="true" />
        )}

        {!unmuted && (
          <button
            onClick={enableSound}
            aria-label="Ativar o som do vídeo"
            className="animate-btn-pulse absolute top-1/2 left-1/2 z-20 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-solar"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5 6 9H2v6h4l5 4z" fill="white" />
              <path d="m23 9-6 6" />
              <path d="m17 9 6 6" />
            </svg>
          </button>
        )}

        {!unmuted && (
          <p className="absolute right-[14px] bottom-[14px] left-[14px] z-20 text-center text-[12.5px] font-extrabold text-white/80">
            Toque para ouvir com som
          </p>
        )}

        {unmuted && (hint || !playing) && (
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/55">
            {playing ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        )}

        {unmuted && (
          <div className="pointer-events-none absolute right-[14px] bottom-[14px] left-[14px] z-20">
            <div className="mb-[6px] flex justify-between text-[11px] font-extrabold text-white/75">
              <span>{fmt(current)}</span>
              <span>{fmt(duration)}</span>
            </div>
            <div className="h-[6px] w-full overflow-hidden rounded-full bg-white/25">
              <div
                className="h-full rounded-full bg-solar transition-[width] duration-200 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
