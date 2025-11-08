import { useEffect } from "react";
import { useStore } from "@/store/useStore";

export default function useLenisScroll(handler, deps = []) {
  const lenis = useStore((s) => s.lenis);

  useEffect(() => {
    if (!lenis || typeof handler !== 'function') return;
    lenis.on('scroll', handler);
    return () => {
      lenis.off('scroll', handler);
    };
  }, [lenis, handler, ...deps]);
}
