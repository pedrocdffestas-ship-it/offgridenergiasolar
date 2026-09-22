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
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      resolve(window.YT);
    };

    const existingScript = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]',
    );

    if (!existingScript) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
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
  const restartTimer = useRef<number | undefined>(undefined);
  const mountedRef = useRef(true);
  const [unmuted, setUnmuted] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [hint, setHint] = useState<"play" | "pause" | null>(null);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    mountedRef.current = true;
    let cancelled = false;
    let tickId: number | undefined;

    loadApi()
      .then((YT) => {
        if (cancelled || !hostRef.current || !YT?.Player) return;

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
            origin:
              typeof window !== "undefined" ? window.location.origin : undefined,
          },
          events: {
            onReady: (event: any) => {
              event.target.mute();
              event.target.setVolume(0);
              event.target.playVideo();
              setDuration(event.target.getDuration?.() || 0);
            },
            onStateChange: (event: any) => {
              if (event.data === 1) setPlaying(true);
              if (event.data === 2) setPlaying(false);
              if (event.data === 0) setPlaying(false);
            },
          },
        });

        const tick = () => {
          if (cancelled) return;

          const player = playerRef.current;
          if (player?.getCurrentTime && player?.getDuration) {
            const total = player.getDuration() || 0;
            const elapsed = player.getCurrentTime() || 0;
            setCurrent(elapsed);
            setDuration(total);
            setProgress(
              total > 0 ? Math.min(100, (elapsed / total) * 100) : 0,
            );
          }

          tickId = window.setTimeout(tick, 250);
        };

        tick();
      })
      .catch(() => {
        if (!cancelled) setPlaying(false);
      });

    return () => {
      cancelled = true;
      mountedRef.current = false;
      if (tickId !== undefined) window.clearTimeout(tickId);
      window.clearTimeout(hintTimer.current);
      window.clearTimeout(restartTimer.current);

      try {
        playerRef.current?.destroy?.();
      } catch {
        /* noop */
      }

      playerRef.current = null;
    };
  }, []);

  const showHint = (kind: "play" | "pause") => {
    setHint(kind);
    window.clearTimeout(hintTimer.current);
    hintTimer.current = window.setTimeout(() => {
      if (mountedRef.current) setHint(null);
    }, 700);
  };

  const enableSound = () => {
    const player = playerRef.current;
    if (!player) return;

    window.clearTimeout(restartTimer.current);

    try {
      // Recarrega o vídeo em vez de combinar pause, seek e play durante o
      // carregamento. Isso garante que a reprodução comece novamente no zero.
      player.loadVideoById({
        videoId: VIDEO_ID,
        startSeconds: 0,
      });
      player.unMute();
      player.setVolume(100);
      player.playVideo();
    } catch {
      // Alguns carregamentos ainda podem estar finalizando no iframe. O retry
      // acontece após o iframe receber o novo vídeo.
      restartTimer.current = window.setTimeout(() => {
        const currentPlayer = playerRef.current;
        if (!currentPlayer || !mountedRef.current) return;

        try {
          currentPlayer.seekTo(0, true);
          currentPlayer.unMute();
          currentPlayer.setVolume(100);
          currentPlayer.playVideo();
        } catch {
          /* noop */
        }
      }, 180);
    }

    setUnmuted(true);
    setPlaying(true);
  };

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player) return;

    const state = player.getPlayerState?.();
    if (state === 1) {
      player.pauseVideo();
      setPlaying(false);
      showHint("pause");
    } else {
      player.playVideo();
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
            type="button"
            onClick={enableSound}
            aria-label="Ativar o som do vídeo"
            className="animate-btn-pulse absolute top-1/2 left-1/2 z-20 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-solar"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
