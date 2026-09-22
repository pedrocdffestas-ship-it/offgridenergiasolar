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
  if (typeof window === "undefined") {
    return Promise.reject(new Error("YouTube API indisponível durante o SSR"));
  }

  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

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
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    }
  });

  return apiPromise;
}

function formatTime(time: number) {
  const seconds = Math.max(0, Math.floor(time));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

export default function VslPlayer() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const readyRef = useRef(false);
  const activatingRef = useRef(false);
  const mountedRef = useRef(true);
  const hintTimerRef = useRef<number | undefined>(undefined);

  const [unmuted, setUnmuted] = useState(false);
  const [activating, setActivating] = useState(false);
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
            origin: window.location.origin,
          },
          events: {
            onReady: (event: any) => {
              if (cancelled) return;

              const player = event.target;
              readyRef.current = true;
              player.mute();
              player.setVolume(0);
              player.playVideo();
              setDuration(player.getDuration?.() || 0);
            },
            onStateChange: (event: any) => {
              if (cancelled) return;

              if (event.data === 1) {
                if (activatingRef.current) {
                  activatingRef.current = false;
                  setActivating(false);
                }
                setPlaying(true);
              }

              if (event.data === 2 && !activatingRef.current) {
                setPlaying(false);
              }

              if (event.data === 0) {
                activatingRef.current = false;
                setActivating(false);
                setPlaying(false);
              }
            },
            onError: () => {
              if (!cancelled) {
                activatingRef.current = false;
                setActivating(false);
                setPlaying(false);
              }
            },
          },
        });

        const updateProgress = () => {
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

          tickId = window.setTimeout(updateProgress, 250);
        };

        updateProgress();
      })
      .catch(() => {
        if (!cancelled) setPlaying(false);
      });

    return () => {
      cancelled = true;
      mountedRef.current = false;
      readyRef.current = false;
      activatingRef.current = false;

      if (tickId !== undefined) window.clearTimeout(tickId);
      window.clearTimeout(hintTimerRef.current);

      try {
        playerRef.current?.destroy?.();
      } catch {
        // O player pode já ter sido destruído pelo YouTube.
      }

      playerRef.current = null;
    };
  }, []);

  const showHint = (kind: "play" | "pause") => {
    setHint(kind);
    window.clearTimeout(hintTimerRef.current);
    hintTimerRef.current = window.setTimeout(() => {
      if (mountedRef.current) setHint(null);
    }, 700);
  };

  const enableSound = () => {
    const player = playerRef.current;

    if (
      !player ||
      !readyRef.current ||
      !mountedRef.current ||
      activatingRef.current ||
      unmuted
    ) {
      return;
    }

    activatingRef.current = true;
    setActivating(true);

    try {
      // A sequência é intencional: interrompe o estado anterior, reposiciona
      // sem recarregar o iframe, ativa o áudio e inicia uma única reprodução.
      player.pauseVideo();
      player.seekTo(0, true);
      player.unMute();
      player.setVolume(100);
      player.playVideo();

      setUnmuted(true);
      setPlaying(true);
    } catch {
      activatingRef.current = false;
      setActivating(false);
    }
  };

  const togglePlay = () => {
    const player = playerRef.current;

    if (!player || !readyRef.current || activatingRef.current) return;

    const state = player.getPlayerState?.();

    if (state === 1) {
      player.pauseVideo();
      setPlaying(false);
      showHint("pause");
      return;
    }

    player.playVideo();
    setPlaying(true);
    showHint("play");
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

        {unmuted && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
            disabled={activating}
            className="absolute inset-0 z-10 h-full w-full cursor-pointer bg-transparent disabled:cursor-wait"
          />
        )}

        {!unmuted && (
          <div className="absolute inset-0 z-10" aria-hidden="true" />
        )}

        {!unmuted && (
          <button
            type="button"
            onClick={enableSound}
            aria-label="Ativar o som do vídeo"
            disabled={activating}
            className="animate-btn-pulse absolute top-1/2 left-1/2 z-20 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-solar disabled:cursor-wait disabled:opacity-80"
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
            {activating ? "Carregando o vídeo com som..." : "Toque para ouvir com som"}
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
              <span>{formatTime(current)}</span>
              <span>{formatTime(duration)}</span>
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
