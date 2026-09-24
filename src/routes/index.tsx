import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import produto from "@/assets/produto.png.asset.json";
import produtoPdf from "@/assets/produto-pdf.png.asset.json";
import ofertaSimples from "@/assets/oferta-simples.png.asset.json";
import solarBg from "@/assets/solar-bg.jpg.asset.json";
import selo from "@/assets/selo-garantia.png.asset.json";
import VslPlayer from "@/components/VslPlayer";
import BonusMarquee from "@/components/BonusMarquee";
import SocialProofSection from "@/components/SocialProofSection";
import fotoBaterias from "@/assets/foto-baterias.jpg";
import fotoPaineis from "@/assets/foto-paineis.jpg";
import fotoControlador from "@/assets/foto-controlador.jpg";
import fotoInversor from "@/assets/foto-inversor.jpg";
import fotoCabos from "@/assets/foto-cabos.jpg";
import fotoResidencial from "@/assets/foto-residencial.jpg";
import fotoRural from "@/assets/foto-rural.jpg";
import fotoExemplos from "@/assets/foto-exemplos.jpg";
import fotoDorConta from "@/assets/dor-conta-luz.jpg";
import fotoAntesDepois from "@/assets/antes-depois-energia.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia Solar com Baterias | Protocolo Prático" },
      {
        name: "description",
        content:
          "Guia digital com +120 projetos práticos: instale, configure e mantenha seu sistema de energia solar com baterias, do zero até funcionando.",
      },
      { property: "og:title", content: "Guia Solar com Baterias | Protocolo Prático" },
      {
        property: "og:description",
        content:
          "+120 projetos passo a passo para gerar sua própria energia solar com baterias em casa, sítio ou comércio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- helpers ---------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useCountdown() {
  const [secs, setSecs] = useState(24 * 3600);
  useEffect(() => {
    const id = setInterval(
      () => setSecs((s) => (s > 0 ? s - 1 : 24 * 3600)),
      1000,
    );
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(secs / 3600)).padStart(2, "0");
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return { h, m, s };
}

/* ---------- UI atoms ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-peach-icon px-[18px] py-[9px] text-sm font-extrabold uppercase tracking-[0.06em] text-solar-deep">
      {children}
    </span>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display mb-10 text-[clamp(26px,3.4vw,36px)] leading-[1.15] font-bold text-ink">
      {children}
    </h2>
  );
}

function BtnPrimary({
  children,
  pulse,
  green,
  className = "",
  onClick,
  href,
}: {
  children: React.ReactNode;
  pulse?: boolean;
  green?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-[34px] py-[18px] text-[17px] font-extrabold text-white transition-transform hover:-translate-y-0.5 ${
    green
      ? "bg-gradient-to-br from-leaf to-[oklch(0.5_0.12_155)] shadow-[0_14px_30px_-10px_rgb(30_140_100/0.55)]"
      : "bg-gradient-to-br from-solar to-solar-deep shadow-[0_14px_30px_-10px_rgb(228_102_26/0.55)]"
  } ${pulse ? (green ? "animate-btn-pulse-green" : "animate-btn-pulse") : ""} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

function Section({
  children,
  bg = "bg-cream",
  className = "",
}: {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}) {
  return (
    <section className={`relative py-[76px] ${bg}`}>
      <div
        className={`relative mx-auto max-w-[800px] px-6 text-center ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

function Glow({ className }: { className: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full opacity-35 blur-[50px] ${className}`}
    />
  );
}

function Check() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf text-xs font-extrabold text-white">
      ✓
    </span>
  );
}

function LeafBullet() {
  return <span className="font-extrabold text-leaf">✓</span>;
}

/* ---------- data ---------- */

const pains = [
  { icon: "💰", bg: "bg-peach-icon", text: "Cansado de ver a conta de luz subir todo mês, sem controle nenhum" },
  { icon: "🕯️", bg: "bg-mint-icon", text: "Já levou apagão de surpresa e ficou na mão, sem energia nenhuma" },
  { icon: "🏡", bg: "bg-mint-icon", text: "Mora ou tem um lugar (sítio, chácara, barco) onde a rede elétrica nunca é boa de verdade" },
  { icon: "☀️", bg: "bg-peach-icon", text: "Já ouviu falar de energia solar, mas não sabe se resolve — painel sozinho só gera de dia, e à noite volta tudo ao mesmo problema" },
  { icon: "🔧", bg: "bg-mint-icon", text: "Acha que ter energia solar de verdade é caro e complicado demais pra alguém como você" },
];

const who = [
  "Quer energia solar em casa, sítio ou chácara",
  "É eletricista e quer adicionar esse serviço",
  "Quer instalar sistemas solares e cobrar por isso",
  "Já travou tentando aprender sozinho",
  "Busca ideias simples e diretas ao ponto",
  "Quer aprender com segurança, sem tentativa e erro",
  "Tem um comércio ou negócio e quer reduzir o custo de energia",
];

const before = [
  "Refém da concessionária, sem escolha",
  "Apagão te pega desprevenido, sempre na pior hora",
  "Acha que energia solar é só pra quem tem dinheiro sobrando",
  "Não sabe nem por onde começar",
];
const after = [
  "Energia funcionando o dia inteiro, com ou sem rede elétrica",
  "Nunca mais fica no escuro quando a luz cai",
  "Aprendeu o passo a passo sem complicação nenhuma",
  "Percebeu que era bem mais simples — e mais barato — do que imaginava",
];

const categories = [
  { img: fotoBaterias, label: "Banco de baterias" },
  { img: fotoPaineis, label: "Painéis solares" },
  { img: fotoControlador, label: "Controlador de carga" },
  { img: fotoInversor, label: "Inversor" },
  { img: fotoCabos, label: "Cabos e proteções" },
  { img: fotoResidencial, label: "Projetos residenciais" },
  { img: fotoRural, label: "Projetos rurais" },
  { img: fotoExemplos, label: "Exemplos práticos" },
];


const pillars = [
  {
    n: "1",
    title: "Instalar",
    text: "Passo a passo da instalação física: painéis, baterias, cabos e proteções.",
  },
  {
    n: "2",
    title: "Configurar",
    text: "Ajustes do controlador de carga, inversor e conexões elétricas corretas.",
  },
  {
    n: "3",
    title: "Manter",
    text: "Cuidados de manutenção preventiva pra garantir vida longa ao sistema.",
  },
];

const receive = [
  "+120 projetos passo a passo",
  "Diagramas e ilustrações explicadas",
  "Cálculos simplificados",
  "Material 100% digital completo",
  "Acesso imediato por e-mail",
  "Consulte sempre que precisar",
];

const receiveVideo = [
  "Mais de 120 projetos e ângulos de uso explicados em vídeo, do básico ao avançado",
  "Acesso pela plataforma web e pelo celular",
  "Mesmo conteúdo do guia, explicado passo a passo em vídeo",
  "Fica gravado, assista quantas vezes precisar",
  "Ideal para quem aprende melhor vendo do que lendo",
];

const bonuses = [
  {
    n: "1",
    title: "Checklist de Compra de Equipamentos",
    text: "Saiba o que perguntar antes de fechar com o vendedor.",
  },
  {
    n: "2",
    title: "Planilha de Cálculo e Dimensionamento",
    text: "Modelo pronto pra calcular consumo, painéis e baterias.",
  },
  {
    n: "3",
    title: "Guia de Precificação para Serviço",
    text: "Pra quem quer instalar e cobrar por isso.",
  },
  {
    n: "4",
    title: "Tabela de Compatibilidade de Equipamentos",
    text: "Confira tensão, corrente e potência antes de comprar.",
  },
  {
    n: "5",
    title: "Guia Rápido de Manutenção Preventiva",
    text: "Cuidados pra garantir vida longa ao sistema.",
  },
];

const faqs = [
  {
    q: "Preciso ter conhecimento prévio de elétrica?",
    a: "Não. O guia foi feito pra quem está começando do zero, com explicações passo a passo.",
  },
  {
    q: "Serve para casa, sítio ou chácara?",
    a: "Sim. Os projetos cobrem instalações residenciais, rurais e de pequeno porte.",
  },
  {
    q: "O guia ensina instalação real ou só teoria?",
    a: "Ensina a prática: instalação, configuração e manutenção passo a passo.",
  },
  {
    q: "Posso usar para prestar serviço e cobrar de clientes?",
    a: "Sim. Um dos bônus é justamente um guia de precificação pra isso.",
  },
  {
    q: "Como recebo o material?",
    a: "Por e-mail, imediatamente após a confirmação do pagamento.",
  },
  {
    q: "A oferta simples tem os bônus e videoaulas?",
    a: "Não. Bônus e videoaulas são exclusivos da Oferta Completa.",
  },
  {
    q: "Como funciona a garantia de 30 dias?",
    a: "Basta solicitar o reembolso dentro de 30 dias e devolvemos 100% do valor pago.",
  },
];

const innerPages = [
  { title: "Dimensionamento", sub: "Cálculo de consumo", img: fotoExemplos },
  { title: "Banco de Baterias", sub: "Ligação e proteção", img: fotoBaterias },
  { title: "Controlador de Carga", sub: "Ajustes passo a passo", img: fotoControlador },
  { title: "Inversor", sub: "Configuração certa", img: fotoInversor },
  { title: "Projeto Rural", sub: "Sítio off-grid", img: fotoRural },
];

/* ---------- page ---------- */

function Index() {
  useReveal();
  const { h, m, s } = useCountdown();
const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return (
    <div className="overflow-x-hidden bg-cream font-body text-ink">
      {/* TOPBAR */}
      <div className="bg-navy px-4 py-[11px] text-center text-[12.5px] font-extrabold tracking-[0.02em] text-white">
        PARA QUEM QUER ENERGIA SOLAR EM CASA E NO COMÉRCIO SEM PAGAR CARO NEM
        ERRAR NA INSTALAÇÃO
      </div>

      {/* HERO */}
      <section className="relative bg-cream pt-[52px] pb-[76px]">
        <Glow className="top-24 -left-24 h-72 w-72 bg-solar" />
        <Glow className="top-64 -right-24 h-72 w-72 bg-leaf" />
        <div className="relative mx-auto max-w-[800px] px-6 text-center">
          <div className="mb-[22px] flex items-center justify-center">
            <img
              src="/uploads/ChatGPT_Image_18_de_set._de_2026_21_32_17.png"
              alt="Guia Solar com Baterias Off-Grid"
              className="h-auto w-full max-w-[340px]"
            />
          </div>
          <h1 className="font-display mx-auto mb-[14px] max-w-[600px] text-[clamp(24px,3.6vw,32px)] leading-[1.15] font-extrabold text-navy">
            Aprenda a gerar sua própria energia solar com baterias e descubra
            como dimensionar seu sistema off-grid antes de gastar dinheiro com
            equipamentos que podem não ser adequados ao seu projeto.
          </h1>
          <p className="font-display mx-auto mb-[30px] max-w-[600px] text-[clamp(15px,2.2vw,19px)] leading-[1.4] font-extrabold text-navy">
            Do básico ao avançado, entenda como calcular, escolher e planejar
            seu sistema para casa, comércio, barco ou fazenda.
          </p>

<div className="relative mx-auto mt-[26px] mb-[30px] max-w-[560px]">
            <Glow className="top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 bg-solar" />
            <img
              src={produto.url}
              alt="Guia Solar com Baterias em versões para celular, computador, livro e caixa"
              width={1370}
              height={1031}
              className="animate-floaty relative z-[1] w-full drop-shadow-[0_26px_34px_rgb(27_42_65/0.28)]"
            />
          </div>

          <div className="mb-2">
            <BonusMarquee size={110} />
          </div>

          <p className="animate-soft-pulse font-display mx-auto mt-9 mb-2 max-w-[720px] px-4 text-[clamp(20px,3vw,30px)] leading-[1.25] font-extrabold text-navy">
            <span className="text-leaf">Economize até 80% na conta de luz</span>,
            dependendo do consumo e da configuração do sistema. <span className="text-solar-deep">Garantia de 30 dias.</span>{" "}
            Faça você mesmo — sem gastar muito, sabendo resolver todos os
            cálculos sozinho.
          </p>

          <div className="animate-bob mx-auto mt-[46px] mb-[-14px] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-mint-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="oklch(0.6 0.12 155)" strokeWidth="3" strokeLinecap="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      {/* VÍDEO VSL */}
      <Section bg="bg-white">
        <div className="reveal">
          <VslPlayer />
          <BtnPrimary pulse href="#receber">
            Quero gerar minha própria energia →
          </BtnPrimary>
          <p className="mt-[14px] text-[13px] font-bold text-ink-soft">
            Acesso imediato • Pagamento único • Garantia de 30 dias
          </p>
        </div>
      </Section>

      {/* DOR */}
      <Section bg="bg-mint">
        <div className="reveal">
          <H2>Toda vez que a conta de luz chega, vem a mesma vontade de mudar alguma coisa...</H2>
          <img src={fotoDorConta} alt="Pessoa preocupada analisando uma conta de luz alta" width={1200} height={800} loading="lazy" className="mx-auto mb-7 aspect-[3/2] w-full max-w-[640px] rounded-[22px] object-cover shadow-[0_18px_40px_-18px_rgb(27_42_65/0.32)]" />
          <div className="mx-auto grid max-w-[640px] grid-cols-1 gap-[18px] sm:grid-cols-2">
            {pains.map((p) => (
              <div
                key={p.text}
                className="flex items-start gap-[14px] rounded-[18px] bg-white p-[22px_18px] text-left shadow-[0_10px_30px_-14px_rgb(27_42_65/0.18)]"
              >
                <span
                  className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full text-lg ${p.bg}`}
                >
                  {p.icon}
                </span>
                <p className="text-[15px] font-bold">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRA QUEM É */}
      <Section bg="bg-cream">
        <div className="reveal">
          <H2>
            Esse guia é <span className="text-solar">pra você</span> que...
          </H2>
          <div className="mx-auto grid max-w-[640px] grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {who.map((w) => (
              <div key={w} className="flex items-start gap-[11px] text-[15px] font-bold">
                <Check />
                {w}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRÓS E CONTRAS */}
      <Section bg="bg-white" className="!max-w-none">
        <div className="reveal mx-auto max-w-[800px]">
          <div className="mx-auto mb-9 max-w-[620px] text-left">
            <h2 className="font-display mb-3 text-[clamp(26px,4vw,36px)] leading-[1.1] font-extrabold text-navy">
              Cansado de tanta dúvida na hora de montar seu sistema solar off-grid?
            </h2>
            <p className="text-[15px] font-semibold leading-[1.45] text-ink-soft">
              Você não está sozinho. Muitas pessoas se sentem perdidas com tantas informações, equipamentos e cálculos.
              É o medo de errar e perder dinheiro.
            </p>
          </div>

          <div className="mx-auto grid max-w-[620px] grid-cols-1 gap-5 text-left sm:grid-cols-2">
            <img src={fotoAntesDepois} alt="Contraste entre uma casa durante apagão e a mesma casa com autonomia solar" width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full rounded-[22px] object-cover shadow-[0_18px_40px_-18px_rgb(27_42_65/0.32)] sm:col-span-2" />
            <div className="overflow-hidden rounded-[22px] bg-cream shadow-[0_10px_30px_-14px_rgb(27_42_65/0.18)]">
              <div className="p-[26px_22px]">
                <h3 className="mb-5 text-sm font-bold tracking-[0.06em] text-ink-soft uppercase">
                  Contras
                </h3>
                <ul className="grid gap-[13px]">
                  {before.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[14.5px] font-bold text-ink-soft">
                      <span className="mt-[-1px] text-base text-[#D95C4F]">✕</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-[22px] bg-mint shadow-[0_10px_30px_-14px_rgb(27_42_65/0.18)]">
              <div className="p-[26px_22px]">
                <h3 className="mb-3 text-[clamp(20px,3vw,25px)] leading-tight font-extrabold text-navy">
                  Imagine ter segurança para produzir sua própria energia.
                </h3>
                <p className="mb-5 text-[14px] font-semibold leading-[1.4] text-ink-soft">
                  Com o conhecimento certo, você pode:
                </p>
                <ul className="grid gap-[13px]">
                  {after.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-[14.5px] font-bold text-ink">
                      <span className="mt-[-1px] text-base text-leaf">✓</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* O QUE É */}
      <Section bg="bg-mint" className="!max-w-none">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.14] blur-[2px]"
          style={{ backgroundImage: `url(${solarBg.url})` }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mint/80 via-mint/60 to-mint/90"
        />
        <div className="reveal relative mx-auto max-w-[800px]">
          <H2>
            O que é o <span className="text-solar">Guia Solar com Baterias</span>?
          </H2>
          <p className="mx-auto mb-[30px] max-w-[640px] text-[16.5px] font-semibold text-ink-soft">
            O Guia Solar com Baterias não é só mais um PDF sobre energia solar
            — é o mesmo conteúdo completo entregue em dois formatos, pra você
            escolher o jeito que combina com você. No primeiro, você recebe um
            material digital completo, com passo a passo ilustrado, trazendo
            mais de 120 projetos práticos para instalar, configurar e manter um
            sistema de energia solar com baterias — do zero até funcionando. No
            segundo, você recebe o passo a passo em vídeo, com videoaulas do
            básico ao avançado, como se alguém estivesse te guiando pela mão,
            aula por aula. De um jeito ou de outro, você sai sabendo resolver
            sozinho: sem depender de técnico, sem comprar equipamento errado,
            sem gastar mais do que precisa.
          </p>
          <span className="mb-8 inline-flex items-center gap-2 rounded-full bg-mint-icon px-[18px] py-[9px] text-sm font-extrabold text-leaf">
            ✓ Guia alinhado às normas técnicas
          </span>
        </div>


        {/* marquee */}
        <div className="reveal mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="animate-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
            {[...innerPages, ...innerPages].map((p, i) => (
              <div
                key={i}
                className="flex aspect-[3/4] w-[180px] shrink-0 flex-col justify-between rounded-[18px] border border-ink/8 bg-white p-4 text-left shadow-[0_10px_30px_-14px_rgb(27_42_65/0.18)]"
              >
                <div>
                  <span className="text-[10px] font-extrabold tracking-[0.08em] text-solar-deep uppercase">
                    Guia Solar
                  </span>
                  <p className="font-display mt-1 text-[15px] leading-tight font-bold text-navy">
                    {p.title}
                  </p>
                </div>
                <div className="flex items-center justify-center overflow-hidden rounded-[12px] bg-mint-icon/60 p-2">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-20 w-20 rounded-[10px] object-cover"
                  />
                </div>
                <p className="text-[11px] font-bold text-ink-soft">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mx-auto mt-8 grid max-w-[640px] grid-cols-1 gap-[13px] px-6 text-left sm:grid-cols-2">
          {categories.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-[11px] rounded-full bg-white px-[18px] py-3 text-[14.5px] font-extrabold shadow-[0_10px_30px_-14px_rgb(27_42_65/0.18)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-mint-icon ring-2 ring-white">
                <img
                  src={c.img}
                  alt={c.label}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover"
                />
              </span>

              {c.label}
            </div>
          ))}
        </div>
      </Section>

      {/* PILARES */}
      <Section bg="bg-cream">
        <div className="reveal">
          <H2>
            Instalar. Configurar. <span className="text-solar">Manter.</span>
          </H2>
          <div className="mx-auto grid max-w-[620px] gap-[15px] text-left">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="flex items-start gap-4 rounded-[18px] bg-white p-[18px_20px] shadow-[0_10px_30px_-14px_rgb(27_42_65/0.18)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-solar text-sm font-extrabold text-white">
                  {p.n}
                </span>
                <div>
                  <h4 className="font-display mb-[3px] text-[15.5px] font-bold">{p.title}</h4>
                  <p className="text-[13.5px] font-semibold text-ink-soft">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-7 max-w-[620px] rounded-2xl bg-peach-icon p-[18px_22px] text-[13.5px] font-bold text-solar-deep">
            Assim, você não recebe só um material digital: recebe um passo a passo com
            intenção prática, do básico ao avançado.
          </div>
        </div>
      </Section>

      {/* O QUE VOCÊ VAI RECEBER */}
      <div id="receber" className="scroll-mt-4" />
      <Section bg="bg-white">
        <div className="reveal">
          <H2>O que você vai receber</H2>

          <div className="mx-auto mb-8 max-w-[620px] rounded-[24px] bg-cream p-[26px_22px] shadow-[0_10px_30px_-14px_rgb(27_42_65/0.18)]">
            <span className="mb-5 inline-flex items-center rounded-full bg-peach-icon px-[14px] py-[6px] text-xs font-extrabold tracking-[0.06em] text-solar-deep uppercase">
              Material Digital Completo
            </span>
            <img
              src={produtoPdf.url}
              alt="Guia Solar com Baterias em material digital completo"
              width={1536}
              height={1024}
              loading="lazy"
              className="mx-auto mb-7 w-full max-w-[300px]"
            />
            <div className="mx-auto grid max-w-[580px] grid-cols-1 gap-[13px] text-left sm:grid-cols-2">
              {receive.map((r) => (
                <div key={r} className="flex items-start gap-[10px] text-[14.5px] font-bold">
                  <Check />
                  {r}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-[620px] rounded-[24px] bg-cream p-[26px_22px] shadow-[0_10px_30px_-14px_rgb(27_42_65/0.18)]">
            <span className="mb-5 inline-flex items-center rounded-full bg-mint-icon px-[14px] py-[6px] text-xs font-extrabold tracking-[0.06em] text-leaf uppercase">
              Videoaulas
            </span>
            <img
              src={produto.url}
              alt="Guia Solar com Baterias em videoaulas"
              width={1370}
              height={1031}
              loading="lazy"
              className="mx-auto mb-7 w-full max-w-[300px]"
            />
            <div className="mx-auto grid max-w-[580px] grid-cols-1 gap-[13px] text-left sm:grid-cols-2">
              {receiveVideo.map((r) => (
                <div key={r} className="flex items-start gap-[10px] text-[14.5px] font-bold">
                  <Check />
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>

      </Section>

      {/* BÔNUS */}
      <Section bg="bg-mint" className="!max-w-none">
        <div className="reveal mx-auto max-w-[800px]">
          <H2>
            Você ainda ganha <span className="text-solar">5 Super Bônus</span>:
          </H2>
        </div>
        <div className="reveal mb-9">
          <BonusMarquee size={190} />
        </div>

        <div className="reveal mx-auto grid max-w-[620px] gap-[13px] px-6 text-left">
          {bonuses.map((b) => (
            <div
              key={b.n}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl bg-white p-[16px_20px] shadow-[0_10px_30px_-14px_rgb(27_42_65/0.18)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint-icon text-[13.5px] font-extrabold text-leaf">
                {b.n}
              </span>
              <div>
                <h4 className="mb-[2px] text-[15px] font-bold">{b.title}</h4>
                <p className="text-[12.5px] font-semibold text-ink-soft">{b.text}</p>
              </div>
              <span className="rounded-full bg-mint-icon px-[14px] py-[6px] text-[12.5px] font-extrabold whitespace-nowrap text-leaf">
                BÔNUS
              </span>
            </div>
          ))}
        </div>
        <div className="reveal mx-auto mt-6 max-w-[620px] rounded-2xl bg-solar p-[18px] text-[15px] font-extrabold text-white">
          Somente hoje, você leva todos os bônus de graça!
        </div>
      </Section>

      {/* COUNTDOWN */}
      <div className="bg-navy py-6 text-center">
        <p className="mb-[11px] text-[12.5px] font-extrabold tracking-[0.08em] text-solar uppercase">
          Promoção encerra em
        </p>
        <div className="flex justify-center gap-[9px]">
          {[h, m, s].map((v, i) => (
            <div key={i} className="flex items-center gap-[9px]">
              {i > 0 && <span className="font-extrabold text-white/40">:</span>}
              <span className="min-w-[52px] rounded-[10px] bg-white/10 px-[15px] py-[9px] text-[21px] font-extrabold text-white">
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>

      <SocialProofSection />

      {/* OFERTAS */}
      <div id="ofertas" className="scroll-mt-4" />
      <Section bg="bg-cream">
        <div className="reveal">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-peach-icon px-[18px] py-[9px] text-sm font-extrabold uppercase tracking-[0.06em] text-solar-deep">
            🔑 Acesso vitalício a todo o conteúdo, sem mensalidade
          </div>
          <H2>Escolha a melhor opção para você</H2>
          <div className="mx-auto grid max-w-[640px] grid-cols-1 items-start gap-5 text-left sm:grid-cols-2">
            {/* simples */}
            <div className="animate-card-pulse relative flex flex-col rounded-[22px] border-2 border-solar bg-white p-[28px_24px]">
              <img
                src={ofertaSimples.url}
                alt="Guia Solar com Baterias"
                loading="lazy"
                className="mx-auto mb-3 w-full max-w-[150px]"
              />
              <h3 className="font-display mb-1 text-lg font-bold">Oferta Simples</h3>
              <p className="mb-[18px] text-[12.5px] font-bold text-ink-soft">
                Ideal para começar
              </p>
              <p className="font-display mb-5 text-[31px] font-extrabold">R$19,90</p>
              <ul className="mb-[22px] grid flex-1 gap-[9px]">
                {["Guia Solar com Baterias", "Acesso ao produto principal", "Garantia de 30 dias"].map(
                  (f) => (
                    <li key={f} className="flex gap-2 text-[13.5px] font-bold">
                      <LeafBullet />
                      {f}
                    </li>
                  ),
                )}
              </ul>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full rounded-full border-2 border-ink/10 bg-white px-[34px] py-[18px] text-[17px] font-extrabold text-ink transition-colors hover:border-solar"
              >
                Quero a oferta simples
              </button>
            </div>
            {/* completa */}
            <div className="animate-card-pulse-green relative flex flex-col rounded-[22px] border-2 border-leaf bg-white p-[28px_24px]">
              <span className="absolute -top-[14px] left-1/2 -translate-x-1/2 rounded-full bg-leaf px-4 py-[7px] text-xs font-extrabold whitespace-nowrap text-white">
                Mais vendida
              </span>
              <img
                src={produto.url}
                alt="Guia Solar com Baterias completo"
                loading="lazy"
                className="mx-auto mb-3 w-full max-w-[150px]"
              />
              <h3 className="font-display mb-1 text-lg font-bold">Oferta Completa</h3>
              <p className="mb-[18px] text-[12.5px] font-bold text-ink-soft">
                Guia + Videoaulas + 5 Super Bônus
              </p>
              <p className="mb-5">
                <span className="mr-[7px] text-sm text-ink-soft line-through">
                  de R$297
                </span>
                <span className="font-display text-[31px] font-extrabold text-leaf">
                  R$47,90
                </span>
              </p>
              <ul className="mb-[22px] grid flex-1 gap-[9px]">
                {[
                  "Guia Solar com Baterias completo",
                  "Videoaulas passo a passo",
                  "+120 projetos práticos",
                  "Checklist de Compra de Equipamentos",
                  "Planilha de Cálculo e Dimensionamento",
                  "Guia de Precificação para Serviço",
                  "Tabela de Compatibilidade",
                  "Guia de Manutenção Preventiva",
                  "Garantia de 30 dias",
                ].map((f) => (
                  <li key={f} className="flex gap-2 text-[13.5px] font-bold">
                    <LeafBullet />
                    {f}
                  </li>
                ))}
              </ul>
              <BtnPrimary
                green
                pulse
                href="https://app.mivvo.com.br/checkout/01a09d50-91ac-7bd0-9016-3ea608924d08"
                className="w-full"
              >
                QUERO A OFERTA COMPLETA!
              </BtnPrimary>
            </div>
          </div>
        </div>
      </Section>

      {/* GARANTIA */}
      <Section bg="bg-mint">
        <div className="reveal">
          <H2>
            Teste <span className="text-leaf">sem Risco</span>
          </H2>
          <img
            src={selo.url}
            alt="Selo de garantia de 30 dias ou seu dinheiro de volta"
            loading="lazy"
            className="animate-floaty mx-auto mb-6 w-[190px] drop-shadow-[0_22px_30px_rgb(27_42_65/0.28)]"
          />
          <p className="font-display mx-auto max-w-[760px] text-[clamp(22px,3.4vw,34px)] leading-[1.3] font-extrabold text-ink">
            Se no prazo de <span className="text-leaf">30 dias</span> você optar
            por não continuar, devolvemos{" "}
            <span className="text-leaf">100% do valor pago</span>.
          </p>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] font-bold text-ink-soft">
            Assumimos o compromisso com a sua satisfação — o risco é todo nosso.
          </p>

          <p className="mx-auto mt-6 max-w-[580px] text-xs font-semibold text-ink-soft opacity-80">
            Aviso de segurança: este material tem finalidade educacional e
            auxilia no planejamento e dimensionamento preliminar. As
            instalações elétricas devem seguir as normas regulamentares e,
            quando necessário, ser executadas ou revisadas por profissionais
            qualificados.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="bg-cream">
        <div className="reveal">
          <H2>Perguntas Frequentes</H2>
          <div className="mx-auto grid max-w-[580px] gap-[11px] text-left">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-white p-[18px_22px] shadow-[0_10px_30px_-14px_rgb(27_42_65/0.18)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-extrabold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="ml-3 text-xl text-solar group-open:hidden">+</span>
                  <span className="ml-3 hidden text-xl text-solar group-open:inline">–</span>
                </summary>
                <p className="mt-[11px] text-sm font-semibold text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-white py-9 text-center text-[13px] font-bold text-ink-soft">
        <p className="font-display mb-[7px] text-[16.5px] font-extrabold text-ink">
          GUIA SOLAR <span className="text-solar">COM BATERIAS</span>
        </p>
        <p className="mx-auto mb-2 max-w-[420px]">
          O guia prático para instalar, configurar e manter sistemas de energia
          solar independentes na sua casa.
        </p>
        <p>© 2026 Guia Solar com Baterias. Todos os direitos reservados.</p>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-navy/65 p-5 backdrop-blur-[3px]"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-[400px] rounded-[26px] bg-white p-[32px_28px] text-center shadow-[0_40px_80px_-20px_rgb(11_31_58/0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Fechar"
              className="absolute top-4 right-[18px] text-xl text-ink-soft"
            >
              ✕
            </button>
            <span className="animate-soft-pulse mb-[14px] inline-block rounded-full bg-leaf px-[14px] py-[6px] text-xs font-extrabold text-white">
              OFERTA ÚNICA
            </span>
            <h3 className="font-display mb-[10px] text-[22px] font-bold">
              Espera! 🙌
            </h3>
            <p className="animate-soft-pulse font-display mb-5 text-[clamp(20px,5.2vw,28px)] leading-[1.25] font-extrabold text-ink">
              Por apenas mais <span className="text-leaf">R$7,10</span> você
              leva o guia completo + 2 bônus exclusivos
            </p>
            <img
              src={produto.url}
              alt="Guia Solar com Baterias"
              width={1370}
              height={1031}
              loading="lazy"
              className="mx-auto mb-4 w-full max-w-[180px]"
            />
            <p className="font-display mb-[18px] text-[30px] font-extrabold text-leaf">
              R$27,00
            </p>
            <ul className="mb-6 grid gap-[9px] text-left text-[13.5px] font-bold">
              {[
                "Videoaulas passo a passo",
                "Guia Solar com Baterias completo",
                "Checklist de Compra de Equipamentos",
                "Planilha de Cálculo e Dimensionamento",
                "Garantia de 30 dias",
              ].map((f) => (
                <li key={f} className="flex gap-2">
                  <LeafBullet />
                  {f}
                </li>
              ))}
            </ul>
            <div className="grid gap-[11px]">
              <BtnPrimary
                green
                pulse
                href="https://app.mivvo.com.br/checkout/01a09d5b-7e66-7012-bbb4-b7946ca56502"
                className="w-full"
              >
                Sim, quero por R$27
              </BtnPrimary>
              <BtnPrimary
                href="https://app.mivvo.com.br/checkout/01a09d2a-4ec7-7e4f-9a3f-d3a7e6205db4"
                className="w-full"
              >
                Seguir com a oferta simples de R$19,90
              </BtnPrimary>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
