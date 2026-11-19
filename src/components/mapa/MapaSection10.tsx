import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";
import { ProofAvatar, PortraitDisclosure } from "./ProofAvatar";

export function MapaSection10() {
  return (
    <section className="mapa-inline-8">
      <div className="wrap">
        <h2 className="sec-title">O que dizem os cristãos que já estudam com o Mapa</h2>
        <div className="proof-car" id="proofCarTrack">
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              Sempre achava difícil de entender a Bíblia, mas o Mapa do Cristão me ajudou a enxergar
              tudo de forma clara e organizada. Agora, minha leitura tem muito mais sentido!
            </blockquote>
            <div className="who">
              <ProofAvatar portrait="Priscila Rocha" />
              <span className="nm">Priscila Rocha</span>
            </div>
          </div>
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              Com o Mapa do Cristão, finalmente consegui conectar os ensinamentos e histórias da
              Bíblia de maneira lógica. Meu estudo nunca foi tão proveitoso!
            </blockquote>
            <div className="who">
              <ProofAvatar portrait="Ricardo Silva" />
              <span className="nm">Ricardo Silva</span>
            </div>
          </div>
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              Eu lia a Bíblia, mas não conseguia ver a relação entre os livros. O Mapa do Cristão
              abriu meus olhos para um estudo mais profundo e esclarecedor.
            </blockquote>
            <div className="who">
              <ProofAvatar portrait="Camila Santos" />
              <span className="nm">Camila Santos</span>
            </div>
          </div>
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              Antes, me sentia perdido ao tentar entender certos livros da Bíblia. O Mapa do Cristão
              me trouxe uma visão panorâmica que fez toda a diferença!
            </blockquote>
            <div className="who">
              <ProofAvatar portrait="José Marcos" />
              <span className="nm">José Marcos</span>
            </div>
          </div>
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              O Mapa do Cristão transformou meu estudo Bíblico! Agora, consigo entender os
              contextos, as conexões e a mensagem central de cada livro.
            </blockquote>
            <div className="who">
              <ProofAvatar portrait="Fernanda Silva" />
              <span className="nm">Fernanda Silva</span>
            </div>
          </div>
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              Sempre quis estudar a Bíblia com mais profundidade, mas não sabia por onde começar. O
              Mapa do Cristão foi a solução que eu precisava!
            </blockquote>
            <div className="who">
              <ProofAvatar portrait="Ana Paula" />
              <span className="nm">Ana Paula</span>
            </div>
          </div>
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              Depois de começar a usar o Mapa do Cristão, minha fé se fortaleceu. Agora, entendo
              melhor a Palavra de Deus e me sinto mais próximo d'Ele.
            </blockquote>
            <div className="who">
              <ProofAvatar portrait="João Batista" />
              <span className="nm">João Batista</span>
            </div>
          </div>
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              Achei que estudar a Bíblia seria difícil, mas o Mapa do Cristão torna tudo mais
              simples e envolvente. Não estudo mais sem ele!
            </blockquote>
            <div className="who">
              <ProofAvatar portrait="Mariana Lopes" />
              <span className="nm">Mariana Lopes</span>
            </div>
          </div>
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              A organização e os resumos dos livros da Bíblia me ajudaram a compreender sua
              estrutura de uma forma que nunca imaginei ser possível.
            </blockquote>
            <div className="who">
              <ProofAvatar portrait="Thiago Costa" />
              <span className="nm">Thiago Costa</span>
            </div>
          </div>
          <div className="proof-card">
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              O Mapa do Cristão me deu um novo ânimo para estudar a Palavra. Agora, cada leitura tem
              um propósito e faz muito mais sentido para mim!
            </blockquote>
            <div className="who">
              <ProofAvatar portrait="Juliana Ramos" />
              <span className="nm">Juliana Ramos</span>
            </div>
          </div>
        </div>
        <div className="proof-dots" id="proofCarDots" aria-hidden="true"></div>
        <PortraitDisclosure />
      </div>
    </section>
  );
}
