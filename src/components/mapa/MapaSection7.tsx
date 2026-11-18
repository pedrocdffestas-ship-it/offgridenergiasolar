import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";

export function MapaSection7() {
  return (
    <section className="mapa-inline-8">
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
        <h2 className="sec-title">Aprovado por mais de 35.000 cristãos</h2>
        <div className="proof-grid">
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              Antes, me sentia perdido ao tentar entender certos livros da Bíblia. O Mapa do Cristão
              me trouxe uma visão panorâmica que fez toda a diferença!
            </blockquote>
            <div className="who">
              <span className="av mapa-inline-1">JM</span>
              <span className="nm">José Marcos</span>
            </div>
          </div>
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              O Mapa do Cristão transformou meu estudo bíblico! Agora, consigo entender os
              contextos, as conexões e a mensagem de cada livro.
            </blockquote>
            <div className="who">
              <span className="av mapa-inline-2">FS</span>
              <span className="nm">Fernanda Silva</span>
            </div>
          </div>
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              Entender o contexto de cada livro me ajudou a aplicar os ensinamentos da Bíblia na
              minha vida. Sou muito grato por esse material!
            </blockquote>
            <div className="who">
              <span className="av mapa-inline-3">RL</span>
              <span className="nm">Roberto Lima</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
