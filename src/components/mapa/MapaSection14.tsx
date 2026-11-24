import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";

export function MapaSection14() {
  return (
    <div className="sticky-cta" id="stickyCta" aria-hidden="true">
      <div className="s-price">
        <strong>R$ 37,90</strong>
      </div>
      <Button variant="mapa" asChild>
        <a className="btn" href="https://app.mivvo.com.br/checkout/01a1f173-963d-7335-8529-5034dbfa2a89" tabIndex={-1}>
          QUERO O MEU!
        </a>
      </Button>
    </div>
  );
}
