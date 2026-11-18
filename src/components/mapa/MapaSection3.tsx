import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";

export function MapaSection3() {
  return (
    <section className="mapa-inline-5">
      <div className="wrap">
        <h2 className="sec-title">Você já tentou ler a Bíblia, mas se sentiu perdido...</h2>
        <ul className="pain-list">
          <li>
            <span className="x" aria-hidden="true">
              ✕
            </span>
            Começa em Gênesis e para no meio do caminho
          </li>
          <li>
            <span className="x" aria-hidden="true">
              ✕
            </span>
            Se sente perdido...
          </li>
          <li>
            <span className="x" aria-hidden="true">
              ✕
            </span>
            Não sabe por onde começar...
          </li>
          <li>
            <span className="x" aria-hidden="true">
              ✕
            </span>
            A Bíblia parece um livro distante e complicado
          </li>
          <li>
            <span className="x" aria-hidden="true">
              ✕
            </span>
            Lê versículos soltos sem entender o contexto
          </li>
        </ul>
        <div className="bridge">
          Mas e se houvesse um caminho simples, visual e passo a passo para entender a Bíblia
          inteira?
        </div>
      </div>
    </section>
  );
}
