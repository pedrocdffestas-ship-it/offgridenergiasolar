import { useEffect, useRef, useState } from "react";
import vslCover from "@/assets/vsl-capa.jpg.asset.json";

const VIDEO_ID = "s7eixWBeBUw";

declare global {
  interface Window {
    YT?: {
      Player?: new (
        element: HTMLDivElement,
        options: {
          videoId: string;
          host: string;
          playerVars: Record<string, string | number>;
          events: {
            onReady: (event: { target: YouTubePlayer }) => void;
            onStateChange: (event: { data: number }) => void;
          };
        },
      ) => YouTubePlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YouTubePlayer {
  destroy: () => void;
  getPlayerState: () => number;
  pauseVideo: () => void;
  playVideo: () => void;
  setVolume: (volume: number) => void;
}

let apiPromise: Promise<NonNullable<Window["YT"]>> | null = null;

function loadApi(): Promise<NonNullable<Window["YT"]>> {
  if (typeof window === "undefined") return Promise.reject(new Error("API indisponível"));
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      if (window.YT) resolve(window.YT);
    };

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    }
  });

  return apiPromise;
}

export default function VslPlayer() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  const startVideo = async () => {
    if (loading || started || !hostRef.current) return;
    setLoading(true);

    try {
      const YT = await loadApi();
      if (!YT.Player || !hostRef.current) return;

      playerRef.current = new YT.Player(hostRef.current, {
        videoId: VIDEO_ID,
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: ({ target }) => {
            target.setVolume(100);
            target.playVideo();
            setStarted(true);
            setPlaying(true);
            setLoading(false);
          },
          onStateChange: ({ data }) => {
            if (data === 1) setPlaying(true);
            if (data === 0 || data === 2) setPlaying(false);
          },
        },
      });
    } catch {
      setLoading(false);
    }
  };

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player) return;

    if (player.getPlayerState() === 1) {
      player.pauseVideo();
      setPlaying(false);
    } else {
      player.playVideo();
      setPlaying(true);
    }
  };

  return (
    <div className="relative z-[1] mx-auto mb-[26px] max-w-[400px] rounded-3xl bg-navy p-[10px] shadow-[0_24px_50px_-20px_rgb(27_42_65/0.28)]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-ink">
        <img src={vslCover.url} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div ref={hostRef} className="absolute inset-0 [&_iframe]:h-full [&_iframe]:w-full" />

        {started && (
          <button type="button" onClick={togglePlay} aria-label={playing ? "Pausar vídeo" : "Continuar vídeo"} className="absolute inset-0 z-10 h-full w-full cursor-pointer bg-transparent" />
        )}

        {!started && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 bg-navy/45 px-5 text-center">
            <button type="button" onClick={startVideo} disabled={loading} aria-label="Começar vídeo com som" className="animate-btn-pulse grid h-[82px] w-[82px] shrink-0 place-items-center rounded-full bg-solar text-white disabled:cursor-wait disabled:opacity-80">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            </button>
            <p className="max-w-[320px] rounded-lg bg-navy/80 px-4 py-3 text-[14px] leading-[1.45] font-extrabold text-white">
              {loading ? "Carregando vídeo..." : "Continue assistindo — muito importante para seu entendimento sobre o nosso Guia Off-Grid"}
            </p>
          </div>
        )}

        {started && !playing && (
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 grid h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-navy/75 text-white">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          </div>
        )}
      </div>
    </div>
  );
}