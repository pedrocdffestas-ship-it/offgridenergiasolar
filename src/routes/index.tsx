import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { useMapaInteractions } from "@/components/mapa/useMapaInteractions";
import { MapaSection1 } from "@/components/mapa/MapaSection1";
import { MapaSection2 } from "@/components/mapa/MapaSection2";
import { MapaSection3 } from "@/components/mapa/MapaSection3";
import { MapaSection4 } from "@/components/mapa/MapaSection4";
import { MapaSection5 } from "@/components/mapa/MapaSection5";
import { MapaSection6 } from "@/components/mapa/MapaSection6";
import { MapaSection7 } from "@/components/mapa/MapaSection7";
import { MapaSection8 } from "@/components/mapa/MapaSection8";
import { MapaSection9 } from "@/components/mapa/MapaSection9";
import { MapaSection10 } from "@/components/mapa/MapaSection10";
import { MapaSection11 } from "@/components/mapa/MapaSection11";
import { MapaSection12 } from "@/components/mapa/MapaSection12";
import { MapaSection13 } from "@/components/mapa/MapaSection13";
import { MapaSection14 } from "@/components/mapa/MapaSection14";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mapa do Cristão — Entenda os 66 livros da Bíblia de forma simples" },
      {
        name: "description",
        content:
          "Mapas visuais dos 66 livros da Bíblia Almeida: resumos, linha do tempo, panorama e plano de leitura em 365 dias. De R$97 por R$47, pagamento único.",
      },
      {
        property: "og:title",
        content: "Mapa do Cristão — Entenda os 66 livros da Bíblia de forma simples",
      },
      {
        property: "og:description",
        content:
          "Mapas visuais dos 66 livros da Bíblia Almeida: resumos, linha do tempo, panorama e plano de leitura em 365 dias. De R$97 por R$47, pagamento único.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MapaPage,
});
function MapaPage() {
  const ref = useRef<HTMLDivElement>(null);
  useMapaInteractions(ref);
  return (
    <div ref={ref} className="mapa-page">
      <MapaSection1 />
      <MapaSection2 />
      <MapaSection3 />
      <MapaSection4 />
      <MapaSection5 />
      <MapaSection6 />
      <MapaSection7 />
      <MapaSection8 />
      <MapaSection9 />
      <MapaSection10 />
      <MapaSection11 />
      <MapaSection12 />
      <MapaSection13 />
      <MapaSection14 />
    </div>
  );
}
