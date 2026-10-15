/** Add only owner-supplied images whose use and content have been checked. */
interface ProofImage {
  src: string;
  alt: string;
}

// No old video testimonials or unverified screenshots are retained.
// The section stays hidden on the public page until approved images are supplied.
const approvedProofImages: ProofImage[] = [];

export default function SocialProofSection() {
  if (approvedProofImages.length === 0) return null;

  return (
    <section className="bg-navy py-12 text-white" aria-labelledby="proof-title">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <h2
          id="proof-title"
          className="font-display mb-8 text-[clamp(26px,4vw,36px)] leading-tight font-bold"
        >
          Mensagens de quem já conhece o guia
        </h2>
        <div className="grid items-start gap-6 sm:grid-cols-2">
          {approvedProofImages.slice(0, 3).map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-xl bg-white p-3">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-auto w-full rounded-md"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
