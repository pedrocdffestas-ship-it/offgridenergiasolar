import { useState } from "react";
import capa from "@/assets/vsl-capa.jpg.asset.json";

const EMBED_URL =
  "https://www.youtube-nocookie.com/embed/s7eixWBeBUw?autoplay=1";

export default function VslPlayer() {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative z-[1] mx-auto mb-[26px] max-w-[400px] rounded-3xl bg-navy p-[10px] shadow-[0_24px_50px_-20px_rgb(27_42_65/0.28)]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-[#0B1523]">
        {started ? (
          <iframe
            src={EMBED_URL}
            title="Guia Off-Grid — vídeo de apresentação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
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
        )}
      </div>
    </div>
  );
}
