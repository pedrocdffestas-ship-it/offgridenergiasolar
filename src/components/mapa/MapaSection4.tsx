import { Button } from "@/components/ui/button";
import { mapaAssets } from "./assets";

export function MapaSection4() {
  return (
    <section className="mapa-inline-6">
      <div className="wrap">
        <h2 className="sec-title">O que estão dizendo sobre o Mapa do Cristão</h2>
        <p className="sec-sub">
          O Mapa do Cristão é incrível e milhares de cristãos concordam com isso.
        </p>
        <div className="car-track" id="carTrack">
          <figure className="tcard">
            <img
              src={mapaAssets[6].url}
              width={1136}
              height={2016}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[7].url}
              width={640}
              height={1137}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[8].url}
              width={1136}
              height={2016}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[9].url}
              width={640}
              height={1138}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[10].url}
              width={1136}
              height={2016}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[11].url}
              width={1136}
              height={2016}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[12].url}
              width={640}
              height={1138}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[13].url}
              width={1184}
              height={2096}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[14].url}
              width={640}
              height={1137}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[15].url}
              width={1184}
              height={2096}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[16].url}
              width={1136}
              height={2016}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[17].url}
              width={1136}
              height={2016}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[18].url}
              width={1184}
              height={2096}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[19].url}
              width={1184}
              height={2096}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[20].url}
              width={1136}
              height={2016}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
          <figure className="tcard">
            <img
              src={mapaAssets[21].url}
              width={1136}
              height={2016}
              alt="Print de depoimento de cliente sobre o Mapa do Cristão"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="car-nav">
          <Button
            variant="mapa"
            type="button"
            className="car-btn"
            id="carPrev"
            aria-label="Depoimentos anteriores"
          >
            ←
          </Button>
          <Button
            variant="mapa"
            type="button"
            className="car-btn"
            id="carNext"
            aria-label="Próximos depoimentos"
          >
            →
          </Button>
        </div>
      </div>
    </section>
  );
}
