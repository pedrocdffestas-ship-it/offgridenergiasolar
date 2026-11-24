import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";

export function MapaSection12() {
  return (
    <section className="mapa-inline-9">
      <div className="wrap">
        <h2 className="sec-title">Dúvidas Frequentes</h2>
        <div className="faq">
          <details>
            <summary>O Mapa do Cristão cobre todos os livros da Bíblia?</summary>
            <div className="faq-body">
              <p>
                Sim, o Mapa do Cristão é um guia completo que abrange todos os{" "}
                <strong>66 livros da Bíblia</strong>, incluindo tanto o Antigo quanto o Novo
                Testamento, com base na <strong>Bíblia Almeida</strong>.
              </p>
            </div>
          </details>
          <details>
            <summary>O Mapa do Cristão é digital ou físico?</summary>
            <div className="faq-body">
              <p>
                O Mapa do Cristão é um <strong>material 100% digital</strong>: você acessa de onde
                quiser, no celular, tablet ou computador, e, se preferir, <strong>pode imprimir</strong>{" "}
                em casa ou em uma gráfica para estudar no papel. Não trabalhamos com livro físico.
              </p>
            </div>
          </details>
          <details>
            <summary>Como vou receber o material?</summary>
            <div className="faq-body">
              <p>
                Após a confirmação da compra, o acesso chega pelo seu <strong>WhatsApp</strong>{" "}
                e também no seu <strong>e-mail</strong>. Por isso, certifique-se de preencher os
                dois corretamente na hora de finalizar o pedido.
              </p>
            </div>
          </details>
          <details>
            <summary>Substitui a necessidade de usar a Bíblia durante o estudo?</summary>
            <div className="faq-body">
              <p>
                O Mapa do Cristão é projetado para oferecer uma perspectiva única e visual, mas{" "}
                <strong>não substitui</strong> a riqueza e autenticidade das Escrituras. O material
                é concebido como um <strong>guia para a Bíblia</strong>, enriquecendo sua
                experiência de estudo para que você tenha o desejo de aprofundar ainda mais sua
                compreensão dos ensinamentos bíblicos de maneira abrangente, direto da fonte.
              </p>
            </div>
          </details>
          <details>
            <summary>É para cristãos?</summary>
            <div className="faq-body">
              <p>
                Sim! O Mapa do Cristão foi desenvolvido com base na <strong>Bíblia Almeida</strong>,
                seguindo a estrutura e os ensinamentos da <strong>Palavra de Deus</strong>.
              </p>
            </div>
          </details>
        </div>
        <div className="faq-cta">
          <Button variant="mapa" asChild>
            <a className="btn" href="#oferta">
              QUERO O MEU! <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 5.5C10.4 4.2 8.3 3.5 4.5 3.5v15c3.8 0 5.9.7 7.5 2 1.6-1.3 3.7-2 7.5-2v-15c-3.8 0-5.9.7-7.5 2Zm0 0v15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
