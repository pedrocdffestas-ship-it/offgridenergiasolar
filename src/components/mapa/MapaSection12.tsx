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
                Oferecemos as duas opções! Você pode escolher a <strong>Versão Digital</strong> para
                baixar e acessar de onde quiser, ou a <strong>Versão Impressa (Livro)</strong>, que
                enviamos diretamente para sua casa com frete grátis. Em ambas as opções, você recebe
                acesso à nossa área de membros exclusiva com a versão digital do Mapa do Cristão.
              </p>
            </div>
          </details>
          <details>
            <summary>Como vou receber o material?</summary>
            <div className="faq-body">
              <p>
                Para a <strong>Versão Digital</strong>, o acesso chega no seu e-mail logo após a
                confirmação (certifique-se de preencher o e-mail e whatsapp corretamente, pois
                enviamos o acesso por ambos). Para a <strong>Versão Impressa</strong>, o envio é
                feito via Correios ou transportadora, ambos com rastreio, e você também recebe o
                acesso digital por e-mail imediatamente!
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
              QUERO O MEU! 📖
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
