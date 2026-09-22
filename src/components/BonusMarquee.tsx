import bonus1 from "@/assets/bonus1.png.asset.json";
import bonus2 from "@/assets/bonus2.png.asset.json";
import bonus3 from "@/assets/bonus3.png.asset.json";
import bonus4 from "@/assets/bonus4.png.asset.json";
import bonus5 from "@/assets/bonus5.png.asset.json";

export const bonusImages = [
  { url: bonus1.url, alt: "Bônus 1 — Checklist de Compra de Equipamentos" },
  { url: bonus2.url, alt: "Bônus 2 — Planilha de Cálculo e Dimensionamento" },
  { url: bonus3.url, alt: "Bônus 3 — Guia de Precificação para Serviço" },
  { url: bonus4.url, alt: "Bônus 4 — Tabela de Compatibilidade de Equipamentos" },
  { url: bonus5.url, alt: "Bônus 5 — Guia Rápido de Manutenção Preventiva" },
];

export default function BonusMarquee({ size = 200 }: { size?: number }) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="animate-marquee flex w-max items-end gap-6 hover:[animation-play-state:paused]">
        {[...bonusImages, ...bonusImages].map((b, i) => (
          <img
            key={i}
            src={b.url}
            alt={b.alt}
            loading="lazy"
            style={{ width: size }}
            className="shrink-0 drop-shadow-[0_16px_24px_rgb(27_42_65/0.22)]"
          />
        ))}
      </div>
    </div>
  );
}
