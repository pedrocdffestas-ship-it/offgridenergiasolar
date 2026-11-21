import { useEffect, useRef, useState } from "react";

export function MapaSectionVsl() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      // O navegador pode exigir interação antes de reproduzir; o botão de som cobre esse caso.
    });
  }, []);

  const enableSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.muted = false;
    setSoundEnabled(true);
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
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="vsl-ph" aria-label="Mini VSL do Mapa do Cristão">
      <div className="wrap">
        <div className="box player">
          <video
            ref={videoRef}
            src="/minivsl-mapa-do-cristao.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            aria-label="Apresentação do Mapa do Cristão"
          />
          {!soundEnabled && (
            <button
              type="button"
              className="vsl-hit"
              onClick={enableSound}
              aria-label="Clique para ouvir o vídeo"
            >
              <span className="vsl-pill">
                <span className="vsl-pill-ico" aria-hidden="true">🔊</span>
                <span>Clique para ouvir</span>
              </span>
            </button>
          )}
          {soundEnabled && (
            <button
              type="button"
              className="vsl-hit"
              onClick={togglePlayback}
              aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
            >
              <span className={`vsl-toggle${playing ? "" : " show"}`} aria-hidden="true">
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
        </div>
      </div>
    </section>
  );
}
