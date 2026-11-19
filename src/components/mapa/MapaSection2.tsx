import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";
import { ProofAvatar, PortraitDisclosure } from "./ProofAvatar";

export function MapaSection2() {
  return (
    <header className="hero">
      <div className="wrap">
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
        <h1>
          Entenda os 66 livros da Bíblia de forma simples e viva a transformação da Palavra em sua
          vida
        </h1>
        <p className="sub">
          Um jeito fácil e aprovado por milhares de cristãos, para aprender a Palavra de Deus de
          forma simples.
        </p>
        <div className="hero-car">
          <div className="hero-car-track" id="heroCarTrack">
            <figure className="hslide">
              <img
                src={mapaAssets[0].url}
                width={1776}
                height={1264}
                alt="Capa do Mapa do Cristão"
              />
            </figure>
            <figure className="hslide">
              <img
                src={mapaAssets[1].url}
                width={1856}
                height={1296}
                alt="Página-mapa do Evangelho de João, do Mapa do Cristão"
                loading="lazy"
              />
            </figure>
            <figure className="hslide">
              <img
                src={mapaAssets[2].url}
                width={1776}
                height={1264}
                alt="Página-mapa do livro de Gênesis, do Mapa do Cristão"
                loading="lazy"
              />
            </figure>
            <figure className="hslide">
              <img
                src={mapaAssets[3].url}
                width={1776}
                height={1264}
                alt="Linha do Tempo do Antigo Testamento, do Mapa do Cristão"
                loading="lazy"
              />
            </figure>
            <figure className="hslide">
              <img
                src={mapaAssets[4].url}
                width={1776}
                height={1264}
                alt="Página-mapa Cronologia de Jesus Cristo, do Mapa do Cristão"
                loading="lazy"
              />
            </figure>
            <figure className="hslide">
              <img
                src={mapaAssets[5].url}
                width={1696}
                height={1472}
                alt="Panorama Bíblico com a estrutura da Bíblia, do Mapa do Cristão"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="hero-count" id="heroCount" aria-live="polite">
            1 / 6
          </div>
        </div>
        <div className="slide-hint">← Deslize para ver →</div>
        <div className="hero-ctas">
          <Button variant="mapa" asChild>
            <a className="btn" href="#oferta">
              Quero Adquirir
            </a>
          </Button>
          <Button variant="mapa" asChild>
            <a className="btn ghost" href="#conhecer">
              Quero Conhecer
            </a>
          </Button>
        </div>
        <div className="proof-strip">
          <div className="avatars" aria-hidden="true">
            <ProofAvatar portrait="Mariana Lopes" />
            <ProofAvatar portrait="José Marcos" />
            <ProofAvatar portrait="Ana Paula" />
            <ProofAvatar portrait="Roberto Lima" />
          </div>
          <div>
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <div className="p-text">
              <strong>35.000+ cristãos</strong> estudando a Bíblia com o Mapa
            </div>
          </div>
        </div>
        <PortraitDisclosure />
      </div>
    </header>
  );
}
