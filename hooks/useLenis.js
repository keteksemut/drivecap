import { useEffect } from "react";
import { useStore } from "@/store/useStore";

export function useLenis(callback, deps = []) {
  const lenis = useStore((s) => s.lenis);
  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", callback);
    return () => lenis.off("scroll", callback);
  }, [lenis, callback, [...deps]]);
};
