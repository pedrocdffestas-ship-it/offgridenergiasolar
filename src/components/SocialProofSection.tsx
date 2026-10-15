import { useCallback, useEffect, useRef, useState } from "react";
import alunoBaterias from "@/assets/prova-baterias";
import grupoSolar from "@/assets/prova-grupo";
import alunoPainel from "@/assets/prova-painel";
import provaDiego from "@/assets/prova-social-diego.png.asset.json";
import provaCarlos from "@/assets/prova-social-carlos.png.asset.json";
import provaPrint1 from "@/assets/prova-social-print-1.png.asset.json";
import provaPrint2 from "@/assets/prova-social-print-2.png.asset.json";

/** Add only owner-supplied images whose use and content have been checked. */
interface ProofImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Installation photos supplied by the owner; no written testimonials or names.
const approvedProofImages: ProofImage[] = [
  { src: alunoBaterias, alt: "Instalação de sistema solar com banco de baterias", width: 1086, height: 1448 },
  { src: alunoPainel, alt: "Instalação de painel solar no telhado", width: 1086, height: 1448 },
  { src: grupoSolar, alt: "Print do grupo de energia solar, com dados pessoais ocultos", width: 474, height: 589 },
];

// Testimonial screenshots supplied by the owner (WhatsApp prints).
const testimonialPrints: ProofImage[] = [
  {
    src: provaDiego.url,
    alt: "Depoimento de cliente sobre o Guia Solar com Baterias",
    width: 941,
    height: 1672,
  },
  {
    src: provaCarlos.url,
    alt: "Depoimento de cliente sobre o Guia Solar com Baterias",
    width: 1086,
    height: 1448,
  },
  {
    src: provaPrint1.url,
    alt: "Cliente relata instalação concluída seguindo o passo a passo do guia",
    width: 1254,
    height: 1254,
  },
  {
    src: provaPrint2.url,
    alt: "Cliente compartilha a instalação no grupo da comunidade de energia solar",
    width: 1254,
    height: 1254,
  },
];

interface ProofCarouselProps {
  images: ProofImage[];
  labelPrefix: string;
}

/** Horizontal snap carousel with side arrows; scrolls one card per click. */
function ProofCarousel({ images, labelPrefix }: ProofCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrowBase =
    "grid h-11 w-11 shrink-0 place-items-center rounded-full text-xl font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-3">
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        disabled={!canPrev}
        aria-label={`Imagem anterior — ${labelPrefix}`}
        className={`${arrowBase} bg-solar text-white shadow-[0_4px_14px_rgb(245_130_32/0.35)] enabled:hover:opacity-85 disabled:opacity-30`}
      >
        ‹
      </button>

      <div
        ref={trackRef}
        className="flex min-w-0 snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image) => (
          <figure
            key={image.src}
            data-card
            className="w-[86%] shrink-0 snap-center overflow-hidden rounded-2xl bg-white/10 p-2 sm:w-[46%]"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width={image.width}
              height={image.height}
              className="mx-auto h-auto max-h-[70vh] w-auto max-w-full rounded-xl"
            />
          </figure>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(1)}
        disabled={!canNext}
        aria-label={`Próxima imagem — ${labelPrefix}`}
        className={`${arrowBase} bg-solar text-white shadow-[0_4px_14px_rgb(245_130_32/0.35)] enabled:hover:opacity-85 disabled:opacity-30`}
      >
        ›
      </button>
    </div>
  );
}

export default function SocialProofSection() {
  if (approvedProofImages.length === 0) return null;

  return (
    <section className="bg-navy py-12 text-white" aria-labelledby="proof-title">
      <div className="mx-auto max-w-[900px] px-4 text-center sm:px-6">
        <h2
          id="proof-title"
          className="font-display mb-8 text-[clamp(26px,4vw,36px)] leading-tight font-bold"
        >
          Instalações na prática
        </h2>
        <ProofCarousel images={approvedProofImages} labelPrefix="instalações" />

        {testimonialPrints.length > 0 && (
          <>
            <h3 className="font-display mt-12 mb-8 text-[clamp(20px,3vw,26px)] leading-tight font-bold">
              Grupo exclusivo
            </h3>
            <ProofCarousel images={testimonialPrints} labelPrefix="depoimentos" />
          </>
        )}
      </div>
    </section>
  );
}
