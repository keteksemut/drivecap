import { fetchCmsQuery } from "@/contentful/api";
import { headerQuery } from "@/contentful/queries/header";
import { footerQuery } from "@/contentful/queries/footer";

export async function getLayoutProps() {
  const [footerRes, headerRes] = await Promise.all([
    fetchCmsQuery(footerQuery, { id: "2TcXx7J7IPFgHVCRUupRtT" }, false),
    fetchCmsQuery(headerQuery, { id: "3hrjEHLuZ5m67UVnGyuxZA" }, false)
  ]);

  return {
    layoutData: {
      header:headerRes?.header ?? null,
      footer: footerRes?.footer ?? null,
    },
  };
}
