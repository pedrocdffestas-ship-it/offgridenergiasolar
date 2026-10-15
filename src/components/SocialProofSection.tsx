import alunoBaterias from "@/assets/prova-baterias";
import grupoSolar from "@/assets/prova-grupo";
import alunoPainel from "@/assets/prova-painel";

/** Add only owner-supplied images whose use and content have been checked. */
interface ProofImage {
  src: string;
  alt: string;
}

// Installation photos supplied by the owner; no written testimonials or names.
const approvedProofImages: ProofImage[] = [
  { src: alunoBaterias, alt: "Instalação de sistema solar com banco de baterias" },
  { src: alunoPainel, alt: "Instalação de painel solar no telhado" },
  { src: grupoSolar, alt: "Print do grupo de energia solar, com dados pessoais ocultos" },
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
                width={image.src === grupoSolar ? 474 : 1086}
                height={image.src === grupoSolar ? 589 : 1448}
                className="h-auto w-full rounded-xl"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
