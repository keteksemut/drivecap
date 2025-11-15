import { useEffect, useRef, useState } from "react";
import { useDocumentReadyState } from "@/hooks/useReadyState";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Lottie({
  animation,
  speed = 1,
  loop = true,
  className,
  viewThreshold = 0
}) {
  const elementRef = useRef(null);
  const animatorRef = useRef(null);
  const [animator, setAnimator] = useState(null);
  const [setRef, { isIntersecting }] = useIntersectionObserver({
    threshold: viewThreshold
  });
  const readyState = useDocumentReadyState();
  const fetchJson = async externalAnimation => {
    const response = await fetch(externalAnimation);
    return await response.json()
  };

  useEffect(() => {
    if (readyState === "complete") {
      import('lottie-web').then((mod) => setAnimator(mod.default));
    }
  }, [readyState]);

  useEffect(() => {
    if (!animator) return;

    let isMounted = true;

    (async () => {
      if (typeof animation === "string" && animation.includes("http")) {
        animation = await fetchJson(animation);
        if (!isMounted) return;
      }

      animatorRef.current = animator.loadAnimation({
        container: elementRef.current,
        animationData: animation,
        renderer: typeof animation === "string" ? "svg" : "canvas",
        autoplay: false,
        loop: loop
      });
      animatorRef.current.setSpeed(speed);
    })();

    return () => {
      isMounted = false;
      animatorRef.current?.destroy();
    };
  }, [animator, animation, loop, speed, fetchJson]);


  useEffect(() => {
    const animation = animatorRef.current;
    if (!animation) return;

    isIntersecting ? animation.play() : animation.pause();
  }, [isIntersecting]);

  return (
    <div
      aria-hidden="true"
      className={className}
      ref={(el) => {
        elementRef.current = el;
        setRef(el)
      }}
    />
  );
};
Lottie.displayName = "Lottie";
