import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";

export function MapaSection5() {
  return (
    <section id="conhecer" className="pos-vsl">
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
        <h2 className="sec-title">
          De Gênesis a Apocalipse: entenda todos os livros da Bíblia através de mapas visuais, com
          base na Bíblia Almeida.
        </h2>

        <div className="video-slot" aria-hidden="true"></div>
        <figure className="real-img wide">
          <img
            src={mapaAssets[22].url}
            width={1952}
            height={1280}
            alt="Apostila do Mapa do Cristão aberta, com as páginas-mapa dos livros da Bíblia"
          />
        </figure>
        <figure className="real-img">
          <img
            src={mapaAssets[23].url}
            width={1696}
            height={1472}
            alt="Página-mapa do livro de Gênesis do Mapa do Cristão"
          />
        </figure>
        <div className="mech-text">
          <p>
            O <strong>Mapa do Cristão</strong> são resumos visuais da Bíblia, com base na{" "}
            <strong>Bíblia Almeida</strong>, preparando você para explorar e compreender a palavra
            de Deus em sua totalidade — simplificando a riqueza dos ensinamentos de cada livro
            sagrado.
          </p>
          <p>
            Com o <strong>Mapa do Cristão</strong>, você poderá se dedicar ao estudo diário da
            Bíblia com entusiasmo, equipado com um guia eficaz para navegar pelas escrituras e suas
            múltiplas dimensões.
          </p>
          <p>
            Essa é a melhor forma de aprimorar seu conhecimento bíblico, estudando com confiança e
            vivenciando uma transformação espiritual profunda ao mergulhar nos ensinamentos de cada
            livro da Sagrada Escritura.
          </p>
        </div>
        <div className="mech-cta">
          <Button variant="mapa" asChild>
            <a className="btn" href="#oferta">
              QUERO COMEÇAR MINHA JORNADA
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
