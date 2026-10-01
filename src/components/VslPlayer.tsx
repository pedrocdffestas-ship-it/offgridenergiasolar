import { useEffect, useRef, useState } from "react";
import capa from "@/assets/vsl-capa.jpg.asset.json";
import videoSrc from "@/assets/manual-solar-off-grid.mp4.asset.json";

export default function VslPlayer() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {
      // O navegador pode exigir uma interação antes de iniciar a reprodução.
    });
  }, []);

  const enableSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = false;
    setSoundEnabled(true);
    setShowFinalMessage(false);

    try {
      await video.play();
      setPlaying(true);
    } catch {
      video.muted = true;
      setSoundEnabled(false);
    }
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video || !soundEnabled) return;

    if (video.paused) {
      setShowFinalMessage(false);
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
      setShowFinalMessage(true);
    }
  };

  return (
    <div className="relative z-[1] mx-auto mb-[26px] max-w-[400px] rounded-3xl bg-navy p-[10px] shadow-[0_24px_50px_-20px_rgb(27_42_65/0.28)]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-[#0B1523]">
        <video
          ref={videoRef}
          src={videoSrc.url}
          poster={capa.url}
          autoPlay
          muted
          playsInline
          preload="auto"
          onPlay={() => {
            setPlaying(true);
            setShowFinalMessage(false);
          }}
          onPause={() => setPlaying(false)}
          className="absolute inset-0 h-full w-full bg-[#0B1523] object-contain"
        />

        {!soundEnabled && (
          <button
            type="button"
            aria-label="Clique para ouvir o vídeo"
            onClick={enableSound}
            className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center border-0 bg-transparent p-0"
          >
            <span className="animate-btn-pulse flex min-h-[58px] items-center gap-2 rounded-full bg-black/65 px-5 py-3 text-base font-bold text-white shadow-lg backdrop-blur-sm">
              <span className="text-xl">🔊</span>
              <span>Clique para ouvir</span>
            </span>
          </button>
        )}

        {soundEnabled && (
          <button
            type="button"
            aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
            onClick={togglePlayback}
            className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center border-0 bg-transparent p-0"
          >
            <span
              className={`flex h-[64px] w-[64px] items-center justify-center rounded-full bg-black/45 text-white opacity-0 transition-opacity duration-200 hover:opacity-100 ${
                playing ? "" : "opacity-100"
              }`}
            >
              {playing ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </span>
          </button>
        )}

        {showFinalMessage && (
          <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex justify-center px-5">
            <div className="animate-btn-pulse rounded-full bg-black/75 px-5 py-3 text-center text-sm font-extrabold text-white shadow-xl backdrop-blur-sm">
              Assista até o final, recado importante.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
