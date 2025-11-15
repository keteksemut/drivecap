import { fetchCmsQuery } from "@/contentful/api";
import { footerQuery } from "@/contentful/queries/footer";
import { headerQuery } from "@/contentful/queries/header";
import { useStore } from "@/store/useStore";
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import "@/styles/globals.css";

const Layout = dynamic(() => import('@/layout/index'), { ssr: false });

export default function App({ Component, pageProps, headerData, footerData }) {
  const { header, footer, setHeader, setFooter } = useStore(
    useShallow(
      (s) => ({
        header: s.headerData,
        footer: s.footerData,
        setHeader: s.setHeaderData,
        setFooter: s.setFooterData,
      })));

  useEffect(() => {
    if (headerData && !header) setHeader(headerData);
    if (footerData && !footer) setFooter(footerData);
  }, [headerData, header, setHeader, footerData, footer, setFooter]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
App.displayName = 'App';

App.getInitialProps = async () => {
  const [headerRes, footerRes] = await Promise.all([
    fetchCmsQuery(headerQuery, { id: "3hrjEHLuZ5m67UVnGyuxZA" }, false),
    fetchCmsQuery(footerQuery, { id: "2TcXx7J7IPFgHVCRUupRtT" }, false),
  ]);

  console.log("🔥 RAW FOOTER RES:", footerRes);

  return {
    headerData: headerRes?.header || null,
    footerData: footerRes?.footer || null,
  };
};
