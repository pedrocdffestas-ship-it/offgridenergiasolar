import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";

export function MapaSection8() {
  return (
    <section>
      <div className="wrap">
        <h2 className="sec-title">🎁 Ganhe esses Bônus hoje!</h2>
        <p className="sec-sub">Receba esses presentes para potencializar seus estudos cristãos</p>
        <div className="mapa-inline-7"></div>
        <div className="feat-card">
          <div className="phone-mock" aria-hidden="true">
            <div className="ph-head">App Mapa do Cristão</div>
            <div className="ph-sub">Seu companheiro diário de oração</div>
            <div className="ph-card">
              <b>Oração Diária</b>
              <span>A leitura e a reflexão do dia, direto no celular.</span>
            </div>
            <div className="ph-card">
              <b>Oração guiada</b>
              <span>Um roteiro para guiar o seu momento de oração.</span>
            </div>
            <div className="ph-card">
              <b>Planos de leitura</b>
              <span>Acompanhe o plano da Bíblia em 365 dias.</span>
            </div>
            <div className="ph-btn">Abrir o app</div>
          </div>
          <div>
            <h3>App Mapa do Cristão</h3>
            <p className="f-body">
              Receba <strong>1 mês de acesso gratuito</strong> ao App Mapa do Cristão. Tenha a{" "}
              <strong>Oração Diária</strong>, a <strong>Oração guiada</strong>, acompanhe os{" "}
              <strong>Planos de leitura</strong> e siga o plano da{" "}
              <strong>Bíblia em 365 dias</strong>. O companheiro ideal para sua jornada diária de
              oração.
            </p>
          </div>
        </div>
        <div className="feat-card">
          <img
            className="feat-img"
            src={mapaAssets[26].url}
            width={1600}
            height={1600}
            alt="Celular com o Evangelho do dia no grupo de Whatsapp do Mapa do Crist\u00e3o"
          />
          <div>
            <h3>Evangelho no Whatsapp</h3>
            <p className="f-body">
              Você terá acesso a um <strong>grupo exclusivo</strong> onde enviamos diariamente o{" "}
              <strong>Evangelho do dia</strong>, uma <strong>explicação simplificada</strong> e uma{" "}
              <strong>oração</strong> para guiar seus momentos de reflexão.
            </p>
          </div>
        </div>
        <div className="feat-card">
          <img
            className="feat-img"
            src={mapaAssets[27].url}
            width={850}
            height={750}
            alt="Di\u00e1rio da Ora\u00e7\u00e3o do Mapa do Crist\u00e3o, planner de leitura e ora\u00e7\u00e3o"
          />
          <div>
            <h3>Diário da Oração</h3>
            <p className="f-body">
              Este <strong>planner</strong> é dedicado para aprofundar sua experiência com a{" "}
              <strong>Palavra de Deus</strong> através da{" "}
              <strong>leitura, meditação, oração e contemplação</strong> das Escrituras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
