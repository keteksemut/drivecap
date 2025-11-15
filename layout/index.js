import Lenis from "lenis";
import { useEffect } from "react";
import { useFrame } from "@/hooks/useFrame"; 
import { useStore } from "@/store/useStore";

export default function Layout({ children }) {
  const lenis = useStore((s) => s.lenis);
  const setLenis = useStore((s) => s.setLenis);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (time) => 1 - Math.pow(2, -10 * time),
      autoRaf: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });
    lenis.pathName = window.location.pathname;
    window.lenis = lenis;
    setLenis(lenis);
    return () => { lenis.destroy(); };
  }, [setLenis]);  

  useFrame((event) => {
    lenis.raf(event);
  }, []);

  return children;
};
Layout.displayName = "Layout 😱";
