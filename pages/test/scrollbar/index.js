import { useRef, useEffect } from "react";
import { useWindowSize } from "react-use";
import useMeasure from "react-use-measure";
import { useStore } from "@/store/useStore";
import { useLenis } from "@/hooks/useLenis";
import { mapRange } from "@/lib/utils/math";
import style from "./scrollbar.module.css";

export default function Scrollbar() {
  const lenis = useStore((s) => s.lenis);
  const thumbRef = useRef();
  const { height } = useWindowSize();
  const [trackMsrRef, { height: trackH }] = useMeasure();
  const [thumbMsrRef, { height: thumbH }] = useMeasure();

  useEffect(() => {
    if (!lenis || !thumbRef.current || !trackH) return;

    const limit = lenis.limit;
    const thumbHeight = Math.floor((height / limit) * trackH);

    thumbRef.current.style.height = `${thumbHeight}px`;
  }, [lenis, height, trackH]);

  useLenis(({ scroll, limit }) => {
    const progress = scroll / limit;
    thumbRef.current.style.transform = `translate3d(0,${progress * (trackH - thumbH)}px,0)`
  }, [trackH, thumbH]);

  useEffect(() => {
    let start = null;

    function onPointerMove(e) {
      if (!start) return;
      e.preventDefault();
      e.stopPropagation();

      const scroll = mapRange(start, trackH - (thumbH - start), e.clientY, 0, lenis.limit);
      lenis.scrollTo(scroll, { immediate: false });
    }

    function onPointerDown(e) {
      start = e.offsetY
    }

    function onPointerUp() {
      start = null;
    }

    thumbRef.current?.addEventListener('pointerdown', onPointerDown, false);
    window.addEventListener('pointermove', onPointerMove, false);
    window.addEventListener('pointerup', onPointerUp, false);

    return () => {
      thumbRef.current?.removeEventListener('pointerdown', onPointerDown, false);
      window.removeEventListener('pointermove', onPointerMove, false);
      window.removeEventListener('pointerup', onPointerUp, false);
    }
  }, [lenis, trackH, thumbH]);

  return (
    <div className={style.scrollbar}>
      <div ref={trackMsrRef} className={style.track}>
        <div
          className={style.thumb}
          ref={(node) => {
            thumbRef.current = node;
            thumbMsrRef(node);
          }}
        />
      </div>
    </div>
  );
};
Scrollbar.displayName = "Scrollbar";
