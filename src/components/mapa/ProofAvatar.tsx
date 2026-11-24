import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import man1 from "@/assets/mapa/retrato-masculinos-1.webp";
import man2 from "@/assets/mapa/retrato-masculinos-2.webp";
import man3 from "@/assets/mapa/retrato-masculinos-3.webp";
import man4 from "@/assets/mapa/retrato-masculinos-4.webp";
import man5 from "@/assets/mapa/retrato-masculinos-5.webp";
import woman1 from "@/assets/mapa/retrato-femininos-1.webp";
import woman2 from "@/assets/mapa/retrato-femininos-2.webp";
import woman3 from "@/assets/mapa/retrato-femininos-3.webp";
import woman4 from "@/assets/mapa/retrato-femininos-4.webp";
import woman5 from "@/assets/mapa/retrato-femininos-5.webp";
import woman6 from "@/assets/mapa/retrato-femininos-6.webp";

const portraits = {
  "José Marcos": man1,
  "Roberto Lima": man2,
  "Ricardo Silva": man3,
  "João Batista": man4,
  "Thiago Costa": man5,
  "Fernanda Silva": woman1,
  "Priscila Rocha": woman2,
  "Camila Santos": woman3,
  "Ana Paula": woman4,
  "Mariana Lopes": woman5,
  "Juliana Ramos": woman6,
} as const;

export type PortraitName = keyof typeof portraits;
export interface ProofAvatarProps extends ComponentProps<"span"> {
  portrait: PortraitName;
}

export function ProofAvatar({ portrait, className, ...props }: ProofAvatarProps) {
  return (
    <span className={cn("av proof-avatar", className)} {...props}>
      <img src={portraits[portrait]} alt="Retrato ilustrativo gerado por IA; não é foto do depoente" width={192} height={192} loading="lazy" />
    </span>
  );
}