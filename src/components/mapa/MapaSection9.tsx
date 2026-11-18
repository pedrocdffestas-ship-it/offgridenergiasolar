import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";

export function MapaSection9() {
  return (
    <section id="oferta">
      <div className="wrap">
        <div className="offer-head-center">
          <div className="brand">
            <span className="b-icon">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 5.5C10.4 4.2 8.3 3.5 4.5 3.5v15c3.8 0 5.9.7 7.5 2 1.6-1.3 3.7-2 7.5-2v-15c-3.8 0-5.9.7-7.5 2Zm0 0v15"
                  stroke="var(--mapa-palette-13)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            Mapa do Cristão
          </div>
          <h2 className="sec-title">Garanta hoje o seu Mapa do Cristão!</h2>
          <p>
            São mais de <strong>250 páginas</strong> exclusivas de Gênesis a Apocalipse!
          </p>
        </div>
        <figure className="real-img wide">
          <img
            src={mapaAssets[22].url}
            width={1952}
            height={1280}
            alt="Apostila do Mapa do Cristão aberta, com as páginas-mapa dos livros da Bíblia"
          />
        </figure>
        <div className="offer-box">
          <div className="ob-label">
            <strong>Desconto Especial Hoje:</strong>
          </div>
          <div className="from">
            De <s>R$ 97,00</s> por
          </div>
          <div className="price">R$ 47,00</div>
          <div className="once">Pagamento único</div>
          <ul>
            <li>
              <span className="ck">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2 8.5 6 12 14 3.5"
                    stroke="var(--mapa-palette-13)"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              Mapa do Cristão Completo em material digital
            </li>
            <li>
              <span className="ck">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2 8.5 6 12 14 3.5"
                    stroke="var(--mapa-palette-13)"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              +3 Bônus Exclusivos
            </li>
            <li>
              <span className="ck">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2 8.5 6 12 14 3.5"
                    stroke="var(--mapa-palette-13)"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              30 Dias de Garantia
            </li>
          </ul>
          <Button variant="mapa" type="button" className="btn big" id="buyBtn">
            QUERO O MEU! 📖
          </Button>
          <div className="prototype-msg" id="prototypeMsg" role="note">
            <span className="pm-tag">⚠️ Aviso — Protótipo</span>
            <br />
            Esta página é um <strong>protótipo</strong>: na versão final, este botão leva direto ao{" "}
            <strong>checkout Mivvo</strong>. Valor: <strong>R$ 47</strong>,{" "}
            <strong>pagamento único</strong>, com <strong>garantia de 30 dias</strong>.
          </div>
          <div className="secure">
            <span>🔒 Compra 100% segura e garantia de 30 dias.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
