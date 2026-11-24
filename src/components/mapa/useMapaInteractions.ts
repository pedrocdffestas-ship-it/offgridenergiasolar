import { useEffect, type RefObject } from "react";

/** Recreates the supplied HTML interactions and releases every listener on unmount. */
export function useMapaInteractions(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const cleanup: (() => void)[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduced ? "auto" : "smooth";
    const date = page.querySelector("#topDate");
    if (date) date.textContent = new Date().toLocaleDateString("pt-BR");

    const heroTrack = page.querySelector<HTMLElement>("#heroCarTrack");
    const counter = page.querySelector("#heroCount");
    if (heroTrack && counter) {
      const total = heroTrack.children.length;
      let timer: ReturnType<typeof setInterval> | undefined;
      const stop = () => {
        if (timer) clearInterval(timer);
      };
      const update = () => {
        const index = Math.round(heroTrack.scrollLeft / Math.max(1, heroTrack.clientWidth));
        counter.textContent = `${index + 1} / ${total}`;
      };
      const start = () => {
        stop();
        if (reduced || document.hidden || total === 0) return;
        timer = setInterval(() => {
          const next =
            (Math.round(heroTrack.scrollLeft / Math.max(1, heroTrack.clientWidth)) + 1) % total;
          heroTrack.scrollTo({ left: next * heroTrack.clientWidth, behavior });
        }, 4000);
      };
      heroTrack.addEventListener("scroll", update, { passive: true });
      for (const event of ["pointerdown", "touchstart", "wheel"]) {
        heroTrack.addEventListener(event, start, { passive: true });
        cleanup.push(() => heroTrack.removeEventListener(event, start));
      }
      document.addEventListener("visibilitychange", start);
      cleanup.push(
        stop,
        () => heroTrack.removeEventListener("scroll", update),
        () => document.removeEventListener("visibilitychange", start),
      );
      start();
    }

    const track = page.querySelector<HTMLElement>("#carTrack");
    for (const [id, direction] of [
      ["carPrev", -1],
      ["carNext", 1],
    ] as const) {
      const button = page.querySelector(`#${id}`);
      if (!button || !track) continue;
      const move = () => {
        const card = track.querySelector<HTMLElement>(".tcard");
        track.scrollBy({ left: direction * ((card?.offsetWidth ?? 302) + 18), behavior });
      };
      button.addEventListener("click", move);
      cleanup.push(() => button.removeEventListener("click", move));
    }

    const proofTrack = page.querySelector<HTMLElement>("#proofCarTrack");
    const proofDots = page.querySelector<HTMLElement>("#proofCarDots");
    if (proofTrack && proofDots) {
      const total = proofTrack.children.length;
      for (let i = 0; i < total; i++) {
        const dot = document.createElement("i");
        if (i === 0) dot.classList.add("on");
        proofDots.appendChild(dot);
      }
      let timer: ReturnType<typeof setInterval> | undefined;
      const stop = () => {
        if (timer) clearInterval(timer);
      };
      const updateDots = () => {
        const index = Math.round(proofTrack.scrollLeft / Math.max(1, proofTrack.clientWidth));
        proofDots
          .querySelectorAll("i")
          .forEach((dot, i) => dot.classList.toggle("on", i === index));
      };
      const start = () => {
        stop();
        if (reduced || document.hidden || total === 0) return;
        timer = setInterval(() => {
          const next =
            (Math.round(proofTrack.scrollLeft / Math.max(1, proofTrack.clientWidth)) + 1) % total;
          proofTrack.scrollTo({ left: next * proofTrack.clientWidth, behavior });
        }, 4000);
      };
      proofTrack.addEventListener("scroll", updateDots, { passive: true });
      for (const event of ["pointerdown", "touchstart", "wheel"]) {
        proofTrack.addEventListener(event, start, { passive: true });
        cleanup.push(() => proofTrack.removeEventListener(event, start));
      }
      document.addEventListener("visibilitychange", start);
      cleanup.push(
        stop,
        () => proofTrack.removeEventListener("scroll", updateDots),
        () => document.removeEventListener("visibilitychange", start),
        () => {
          proofDots.innerHTML = "";
        },
      );
      start();
    }

    const sticky = page.querySelector<HTMLElement>("#stickyCta");
    const hero = page.querySelector(".hero");
    const offer = page.querySelector("#oferta");
    if (sticky && hero && offer && "IntersectionObserver" in window) {
      let pastHero = false;
      let overOffer = false;
      const update = () => {
        const show = pastHero && !overOffer;
        sticky.classList.toggle("show", show);
        sticky.setAttribute("aria-hidden", String(!show));
        const link = sticky.querySelector("a");
        if (link) link.tabIndex = show ? 0 : -1;
      };
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          pastHero = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
          update();
        },
        { threshold: 0.05 },
      );
      const offerObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          overOffer = entry.isIntersecting;
          update();
        },
        { threshold: 0.12 },
      );
      heroObserver.observe(hero);
      offerObserver.observe(offer);
      cleanup.push(
        () => heroObserver.disconnect(),
        () => offerObserver.disconnect(),
      );
    }
    return () => cleanup.forEach((release) => release());
  }, [root]);
}
