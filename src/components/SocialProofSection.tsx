import { useEffect, useRef, useState, type MutableRefObject } from "react";
import { ShieldCheck, Zap } from "lucide-react";
import videoInstalacao from "@/assets/depoimento-instalacao.mp4.asset.json";
import videoCasaOffGrid from "@/assets/depoimento-casa-off-grid.mp4.asset.json";
import videoExperiencia from "@/assets/depoimento-experiencia.mp4.asset.json";
import capaJorge from "@/assets/depoimento-jorge-capa.jpg.asset.json";
import capaJulia from "@/assets/depoimento-julia-capa.jpg.asset.json";
import capaMaicon from "@/assets/depoimento-maicon-capa.jpg.asset.json";
import prova1 from "@/assets/prova1.png.asset.json";
import prova3 from "@/assets/prova3.png.asset.json";
import prova4 from "@/assets/prova4.png.asset.json";
import provaDiego from "@/assets/prova-social-diego.png.asset.json";
import provaCarlos from "@/assets/prova-social-carlos.png.asset.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const videos = [
  { id: "instalacao", src: videoInstalacao.url, poster: capaJorge.url, name: "Jorge", state: "Maranhão" },
  { id: "casa-off-grid", src: videoCasaOffGrid.url, poster: capaJulia.url, name: "Júlia", state: "Santa Catarina" },
  { id: "experiencia", src: videoExperiencia.url, poster: capaMaicon.url, name: "Maicon", state: "Bahia" },
];

const images = [
  { id: "prova-1", src: prova1.url, alt: "Depoimento real de cliente enviado por WhatsApp" },
  { id: "prova-3", src: prova3.url, alt: "Terceiro depoimento real de cliente enviado por WhatsApp" },
  { id: "prova-4", src: prova4.url, alt: "Quarto depoimento real de cliente enviado por WhatsApp" },
  { id: "prova-diego", src: provaDiego.url, alt: "Depoimento de Diego Santos sobre o Guia Solar com Baterias" },
  { id: "prova-carlos", src: provaCarlos.url, alt: "Depoimento de Carlos Almeida sobre o Guia Solar com Baterias" },
];

const benefits = [
  "Mais independência da concessionária",
  "Possibilidade de reduzir significativamente a conta de luz",
  "Mais segurança durante apagões",
  "Soluções para sítios, fazendas e áreas afastadas",
  "Energia para automação, bombas, iluminação e outros equipamentos",
];

const controlClass = "z-10 h-11 w-11 border-0 bg-navy text-white shadow-lg hover:bg-solar disabled:opacity-35";

interface TestimonialVideoProps {
  index: number;
  name: string;
  state: string;
  src: string;
  poster: string;
  videoRefs: MutableRefObject<Array<HTMLVideoElement | null>>;
  onPlay: (index: number) => void;
}

function TestimonialVideo({ index, name, state, src, poster, videoRefs, onPlay }: TestimonialVideoProps) {
  const [playing, setPlaying] = useState(false);

  const togglePlay = async () => {
    const video = videoRefs.current[index];
    if (!video) return;
    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  return (
    <article className="overflow-hidden rounded-lg border border-white/12 bg-white/7 text-left shadow-2xl">
      <div className="px-5 py-4">
        <h3 className="font-display text-[17px] font-extrabold text-white">Depoimento de {name} — {state}</h3>
        <p className="mt-1 text-[12px] font-bold text-solar">Sobre o Guia Solar com Baterias</p>
      </div>
      <div className="relative aspect-[9/16] overflow-hidden bg-ink">
        <video ref={(node) => { videoRefs.current[index] = node; }} src={src} poster={poster} playsInline preload="metadata" onPlay={() => { setPlaying(true); onPlay(index); }} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} className="h-full w-full object-cover" aria-label={`Depoimento em vídeo de ${name} sobre o Guia Solar com Baterias`} />
        <button type="button" onClick={togglePlay} aria-label={playing ? `Pausar depoimento de ${name}` : `Reproduzir depoimento de ${name}`} className="absolute inset-0 z-10 grid h-full w-full cursor-pointer place-items-center bg-transparent">
          {!playing && <span className="animate-btn-pulse grid h-[72px] w-[72px] place-items-center rounded-full bg-solar text-white shadow-xl"><svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span>}
        </button>
      </div>
    </article>
  );
}

export default function SocialProofSection() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [imageApi, setImageApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!imageApi) return;
    const interval = window.setInterval(() => imageApi.scrollNext(), 4500);
    return () => window.clearInterval(interval);
  }, [imageApi]);

  const pauseOtherVideos = (activeIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) video.pause();
    });
  };

  return (
    <section className="relative overflow-hidden bg-navy py-[76px] text-white">
      <div className="relative mx-auto max-w-[960px] px-6 text-center">
        <div className="reveal">
          <h2 className="font-display mx-auto mb-5 max-w-[760px] text-[clamp(34px,5vw,52px)] leading-[1.08] font-extrabold">
            <span className="inline-block rounded-md bg-solar px-2 py-1 text-white">Veja</span> como as pessoas estão colocando o conhecimento do Guia Solar com Baterias em prática.
          </h2>
          <p className="mx-auto mb-4 max-w-[760px] text-[16px] leading-[1.7] font-semibold text-white/70">
            Chega de depender completamente da concessionária, sofrer com apagões ou continuar pagando uma conta de luz cada vez mais alta.
          </p>
          <p className="mx-auto mb-9 max-w-[760px] text-[16px] leading-[1.7] font-semibold text-white/70">
            Veja as experiências, instalações e resultados apresentados por quem já colocou esse conhecimento em prática.
          </p>

          <div className="mx-auto mb-14 grid max-w-[780px] grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/6 px-4 py-3 text-[14px] font-bold text-white/90 last:sm:col-span-2 last:sm:mx-auto">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf text-xs text-white">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mb-16">
          <p className="mb-5 text-xs font-extrabold uppercase text-solar">Experiências em vídeo</p>
          <Carousel opts={{ align: "center" }} aria-label="Depoimentos em vídeo" className="mx-auto max-w-[820px] px-5 sm:px-12">
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem key={video.id} className="basis-[92%] sm:basis-1/2">
                  <TestimonialVideo index={index} name={video.name} state={video.state} src={video.src} poster={video.poster} videoRefs={videoRefs} onPlay={pauseOtherVideos} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Ver vídeo anterior" className={`${controlClass} left-1`} />
            <CarouselNext aria-label="Ver próximo vídeo" className={`${controlClass} right-1`} />
          </Carousel>
        </div>

        <div className="reveal mb-12">
          <p className="mb-5 text-xs font-extrabold uppercase text-solar">Mensagens de quem já conhece o guia</p>
          <Carousel opts={{ align: "center", loop: true }} setApi={setImageApi} aria-label="Depoimentos em imagem" className="mx-auto max-w-[820px] px-5 sm:px-12">
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id} className="basis-[92%] sm:basis-1/2">
                  <div className="rounded-lg border border-white/12 bg-white p-3 shadow-2xl">
                    <img src={image.src} alt={image.alt} loading="lazy" className="mx-auto w-full rounded-md" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Ver imagem anterior" className={`${controlClass} left-0`} />
            <CarouselNext aria-label="Ver próxima imagem" className={`${controlClass} right-0`} />
          </Carousel>
        </div>

        <div className="reveal">
          <a href="#ofertas" className="animate-btn-pulse inline-flex w-full max-w-[560px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-solar to-solar-deep px-6 py-[19px] text-[16px] font-extrabold text-white shadow-xl transition-transform hover:-translate-y-0.5 sm:text-[18px]">
            <Zap aria-hidden="true" className="h-5 w-5 shrink-0" />
            QUERO MEU GUIA SOLAR COM BATERIAS
          </a>
          <p className="mt-4 text-[12px] font-bold text-white/65">Acesso imediato • Garantia de 30 dias • Compra segura</p>
        </div>
      </div>
    </section>
  );
}