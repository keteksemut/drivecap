import "@/styles/globals.css";
import dynamic from "next/dynamic";

const LenisProvider = dynamic(() => import('@/providers/lenis-provider'), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <LenisProvider>
      <Component {...pageProps} />
    </LenisProvider>
  )
}
