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
    width: 1080,
    height: 2340,
  },
  {
    src: provaCarlos.url,
    alt: "Depoimento de cliente sobre o Guia Solar com Baterias",
    width: 1080,
    height: 1478,
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

export default function SocialProofSection() {
  if (approvedProofImages.length === 0) return null;

  return (
    <section className="bg-navy py-12 text-white" aria-labelledby="proof-title">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <h2
          id="proof-title"
          className="font-display mb-8 text-[clamp(26px,4vw,36px)] leading-tight font-bold"
        >
          Instalações na prática
        </h2>
        <div className="grid items-start gap-6 sm:grid-cols-2">
          {approvedProofImages.slice(0, 3).map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl bg-white/10 p-2">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-xl"
              />
            </figure>
          ))}
        </div>

        {testimonialPrints.length > 0 && (
          <>
            <h3 className="font-display mt-12 mb-8 text-[clamp(20px,3vw,26px)] leading-tight font-bold">
              Prints de quem já comprou
            </h3>
            <div className="grid items-start gap-6 sm:grid-cols-2">
              {testimonialPrints.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-2xl bg-white/10 p-2"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full rounded-xl"
                  />
                </figure>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
