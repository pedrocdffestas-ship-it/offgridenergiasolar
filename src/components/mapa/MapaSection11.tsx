import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";

export function MapaSection11() {
  return (
    <section className="mapa-inline-9">
      <div className="wrap">
        <div className="guarantee">
          <svg
            className="seal"
            viewBox="0 0 200 200"
            role="img"
            aria-label="Selo de garantia de 30 dias"
          >
            <circle cx="100" cy="100" r="96" fill="var(--mapa-palette-1)"></circle>
            <circle
              cx="100"
              cy="100"
              r="84"
              fill="none"
              stroke="var(--mapa-palette-11)"
              strokeWidth="3"
            ></circle>
            <circle cx="100" cy="100" r="62" fill="var(--mapa-palette-3)"></circle>
            <text
              x="100"
              y="88"
              textAnchor="middle"
              fill="var(--mapa-palette-13)"
              fontFamily="Lora, Georgia, serif"
              fontSize="17"
              fontWeight="700"
            >
              GARANTIA
            </text>
            <text
              x="100"
              y="122"
              textAnchor="middle"
              fill="var(--mapa-palette-11)"
              fontFamily="Lora, Georgia, serif"
              fontSize="32"
              fontWeight="700"
            >
              30 DIAS
            </text>
            <text x="100" y="146" textAnchor="middle" fill="#cfe2fb" fontSize="11.5">
              risco zero
            </text>
          </svg>
          <h2>30 Dias de Garantia</h2>
          <p>
            Confiamos tanto na qualidade do nosso material, que oferecemos{" "}
            <strong>garantia de 30 dias</strong>! Caso não fique totalmente satisfeito,{" "}
            <strong>devolveremos 100% do seu dinheiro</strong>, dentro deste prazo.
          </p>
        </div>
      </div>
    </section>
  );
}
