import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";

export function MapaSection6() {
  return (
    <section>
      <div className="wrap">
        <h2 className="sec-title">O que você vai receber</h2>
        <p className="sec-sub">
          Simplificando sua jornada espiritual e fortalecendo sua conexão com Deus
        </p>
        <div className="mapa-inline-7"></div>
        <div className="feat-card">
          <img
            className="feat-img"
            src={mapaAssets[23].url}
            width={1696}
            height={1472}
            alt="Página-mapa do livro de Gênesis, do Mapa do Cristão"
            loading="lazy"
          />
          <div>
            <h3>Mapa dos 66 Livros</h3>
            <p className="f-body">
              Explore cada um dos <strong>66 livros da Bíblia</strong> de forma clara e estruturada,
              com resumos e elementos essenciais que facilitam o entendimento da{" "}
              <strong>Palavra de Deus</strong>.
            </p>
            <p className="f-note">Em cada livro, você terá:</p>
            <ul className="check-list">
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Resumo do Livro
              </li>
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Simbologias e temas centrais
              </li>
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Principais nomes
              </li>
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Linha do tempo e eventos
              </li>
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Versículos-chaves
              </li>
            </ul>
          </div>
        </div>
        <div className="feat-card">
          <img
            className="feat-img"
            src={mapaAssets[24].url}
            width={850}
            height={750}
            alt="Linha do tempo com os eventos cronológicos da Bíblia, do Mapa do Cristão"
          />
          <div>
            <h3>Eventos Cronológicos</h3>
            <p className="f-body">
              Compreenda a sequência dos principais acontecimentos bíblicos em{" "}
              <strong>ordem cronológica</strong>, facilitando o entendimento da{" "}
              <strong>história da salvação</strong> e sua conexão ao longo dos tempos.
            </p>
            <ul className="check-list">
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Linha do Tempo Bíblica
              </li>
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Conexões Entre Eventos
              </li>
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Contexto Histórico
              </li>
            </ul>
          </div>
        </div>
        <div className="feat-card">
          <img
            className="feat-img"
            src={mapaAssets[5].url}
            width={1696}
            height={1472}
            alt="Panorama com a estrutura da Bíblia, do Mapa do Cristão"
          />
          <div>
            <h3>Panorama da Bíblia</h3>
            <p className="f-body">
              Entenda como a Bíblia está organizada, explorando suas divisões, seções e categorias
              literárias. Esse guia ajuda a visualizar a conexão entre os livros e a mensagem
              central das Escrituras.
            </p>
            <ul className="check-list">
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Antigo e Novo Testamento
              </li>
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Seções e Livros
              </li>
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Gêneros Literários
              </li>
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Tabela Periódica da Bíblia
              </li>
            </ul>
          </div>
        </div>
        <div className="feat-card">
          <img
            className="feat-img"
            src={mapaAssets[25].url}
            width={1696}
            height={1472}
            alt="Plano de leitura da Bíblia em 365 dias, do Mapa do Cristão"
          />
          <div>
            <h3>Plano de Leitura</h3>
            <p className="f-body">
              <strong>Plano de Leitura da Bíblia</strong> com metas capítulo a capítulo para te
              incentivar a aprofundar seu estudo Bíblico e fortalecer a sua intimidade com Deus,
              mesmo que você tenha pouco tempo ou viva uma vida corrida.
            </p>
            <ul className="check-list">
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Bíblia em 365 dias
              </li>
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Devocional em 365 dias
              </li>
              <li>
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5 6 12 13.5 4"
                      stroke="var(--mapa-palette-1)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Checklist de Leitura
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
