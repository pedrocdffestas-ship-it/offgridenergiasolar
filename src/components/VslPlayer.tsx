import { useEffect, useRef, useState } from "react";
import capa from "@/assets/vsl-capa.jpg.asset.json";
import videoSrc from "@/assets/manual-solar-off-grid.mp4.asset.json";

export default function VslPlayer() {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ao sair da capa, o clique já autoriza reprodução com som.
  useEffect(() => {
    if (!started) return;
    videoRef.current?.play().catch(() => {
      // Se o navegador bloquear o autoplay, o usuário usa os controles nativos.
    });
  }, [started]);

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
          <video
            ref={videoRef}
            src={videoSrc.url}
            poster={capa.url}
            controls
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full bg-[#0B1523] object-cover"
          />
        )}
      </div>
    </div>
  );
}
