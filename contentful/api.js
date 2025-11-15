import { GraphQLClient } from "graphql-request";

export const fetchCmsQuery = async (query, variables = {}, preview = false) => {
  try {
    const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
    const token = preview
      ? process.env.CONTENTFUL_PREVIEW_TOKEN
      : process.env.CONTENTFUL_DELIVERY_TOKEN;

    const client = new GraphQLClient(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await client.request(query, variables);
  } catch (error) {
    console.error("Contentful fetch error:", error);
    return null;
  }
};

