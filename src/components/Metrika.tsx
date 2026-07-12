import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
  }
}

const YM_ID = Number(import.meta.env.VITE_YM_ID);

function initMetrika(id: number) {
  if (document.getElementById("ym-script")) return;

  const script = document.createElement("script");
  script.id = "ym-script";
  script.async = true;
  script.src = "https://mc.yandex.ru/metrika/tag.js";
  document.head.appendChild(script);

  // очередь вызовов до загрузки tag.js — стандартный сниппет Метрики
  window.ym =
    window.ym ||
    function (...args: unknown[]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window.ym as any).a = (window.ym as any).a || []).push(args);
    };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window.ym as any).l = Date.now();

  window.ym(id, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
}

export default function Metrika() {
  const location = useLocation();

  useEffect(() => {
    if (!YM_ID) return;
    initMetrika(YM_ID);
  }, []);

  useEffect(() => {
    if (!YM_ID || !window.ym) return;
    window.ym(YM_ID, "hit", location.pathname + location.search + location.hash);
  }, [location]);

  return null;
}
