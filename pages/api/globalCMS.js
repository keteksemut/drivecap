import { fetchCmsQuery } from "@/contentful/api";
import { footerQuery } from "@/contentful/queries/footer";

export default async function handler(req, res) {
  try {
    const [footerRes] = await Promise.all([
      fetchCmsQuery(footerQuery, { id: "2TcXx7J7IPFgHVCRUupRtT" }, false),
    ]);

    res.status(200).json({
      footer: footerRes?.footer || null
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to load global CMS data" });
  }
};
