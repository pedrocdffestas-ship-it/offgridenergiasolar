import { useEffect, useRef, useState } from "react";
import capa from "@/assets/vsl-capa.jpg.asset.json";

const VIDEO_ID = "s7eixWBeBUw";

export default function VslPlayer() {
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!started) return;

    const createPlayer = () => {
      if (!iframeRef.current || !(window as any).YT) return;

      playerRef.current = new (window as any).YT.Player(iframeRef.current, {
        events: {
          onReady: (event: any) => event.target.playVideo(),
          onStateChange: (event: any) => {
            const YT = (window as any).YT;
            setPlaying(event.data === YT.PlayerState.PLAYING);
          },
        },
      });
    };

    if ((window as any).YT?.Player) {
      createPlayer();
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }

    const previousCallback = (window as any).onYouTubeIframeAPIReady;
    (window as any).onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      createPlayer();
    };

    return () => {
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [started]);

  const togglePlayback = () => {
    const player = playerRef.current;
    if (!player) return;

    if (playing) player.pauseVideo();
    else player.playVideo();
  };

  return (
    <div className="relative z-[1] mx-auto mb-[26px] max-w-[400px] rounded-3xl bg-navy p-[10px] shadow-[0_24px_50px_-20px_rgb(27_42_65/0.28)]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-[#0B1523]">
        {!started ? (
          <button
            type="button"
            aria-label="Assistir ao vídeo"
            onClick={() => setStarted(true)}
            className="absolute inset-0 h-full w-full cursor-pointer border-0 p-0"
          >
            <img
              src={capa.url}
              alt="Apresentação do Guia Off-Grid com baterias"
              className="absolute inset-0 h-full w-full object-cover"
              width={720}
              height={1280}
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="animate-btn-pulse flex h-[74px] w-[74px] items-center justify-center rounded-full bg-solar">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        ) : (
          <>
            <iframe
              ref={iframeRef}
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?enablejsapi=1&controls=0&rel=0&modestbranding=1&playsinline=1&fs=0`}
              title="Guia Off-Grid — vídeo de apresentação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={false}
              className="absolute inset-0 h-full w-full border-0"
            />

            <button
              type="button"
              aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
              onClick={togglePlayback}
              className="absolute inset-0 z-10 flex items-center justify-center border-0 bg-transparent"
            >
              <span
                className={`flex h-[68px] w-[68px] items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-opacity duration-200 ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
              >
                {playing ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
                  </svg>
                ) : (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
