import { mapaAssets } from "./assets";
import appMockup from "@/assets/mapa/app-mapa-cristao-mockup.png.asset.json";

export function MapaSection8() {
  return (
    <section>
      <div className="wrap">
        <p className="kicker">Ganhe esses Bônus hoje!</p>
        <h2 className="sec-title">Receba esses presentes para potencializar seus estudos cristãos</h2>
        <div className="mapa-inline-7"></div>
        <div className="feat-card">
          <img
            className="feat-img"
            src={appMockup.url}
            width={1224}
            height={1285}
            alt="Dois celulares exibindo o App Mapa do Cristão, com Oração Diária, Oração guiada e Planos de leitura"
            loading="lazy"
          />
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
            alt="Celular com o Evangelho do dia no grupo de Whatsapp do Mapa do Cristão"
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
            alt="Diário da Oração do Mapa do Cristão, planner de leitura e oração"
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
