import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import poster from "@/assets/mapa/minivsl-mapa-capa.jpg.asset.json";
import { playMiniVslFromStart, toggleMiniVsl } from "./minivslPlayback";

export function MapaSectionVsl() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [audible, setAudible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);

  const startWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (failed) video.load();
    try {
      await playMiniVslFromStart(video);
      setAudible(true);
      setFailed(false);
    } catch {
      // Keep the tap-to-start overlay and poster available when playback is denied.
      setPaused(true);
    }
  };
  const toggle = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      await toggleMiniVsl(video);
    } catch {
      setPaused(true);
    }
  };

  return (
    <section className="vsl-ph" aria-label="Mini VSL do Mapa do Cristão">
      <div className="wrap">
        <div className="box">
          <video
            ref={videoRef}
            src="/minivsl-mapa-do-cristao.mp4"
            poster={poster.url}
            autoPlay
            muted={!audible}
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            aria-label="Apresentação do Mapa do Cristão"
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
            onEnded={() => setPaused(true)}
            onError={() => {
              setFailed(true);
              setAudible(false);
            }}
          />
          {audible ? (
            <Button
              variant="mapa"
              className="minivsl-toggle"
              onClick={toggle}
              aria-label={paused ? "Continuar vídeo" : "Pausar vídeo"}
            >
              {paused && (
                <span className="minivsl-pause">
                  <Pause aria-hidden="true" />
                  <Play aria-hidden="true" />
                </span>
              )}
            </Button>
          ) : (
            <Button variant="mapa" className="minivsl-sound" onClick={startWithSound}>
              🔊 Clique para ouvir
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
