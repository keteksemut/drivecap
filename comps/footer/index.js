import { useEffect, useState } from "react";
import Lottie from "../lottie";
import { useStore } from "@/store/useStore";
import clsx from "clsx";
import st from "./footer.module.css";

export default function Footer(className) {
  const footerData = useStore((data) => data.footerData);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    fetch('/lottie/animationData.json')
      .then((res) => res.json())
      .then((data) => setAnimation(data))
  }, []);


  return (
    <footer className={clsx(st.footer, className)}>
      <div
        className={clsx("layout-block-inner", st.inner)}
      >
        {footerData?.headline}
        {animation && (
          <div
            className={st["lottie-map"]}
          >
            <Lottie
              className={st.lottie}
              animation={animation}
              loop={false}
            />
          </div>
        )}
      </div>
    </footer>
  )
}
Footer.displayName = 'Footer';
