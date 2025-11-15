import { fetchCmsQuery } from './contentful/api.js';
import { footerQuery } from './contentful/queries/footer.js';

(async () => {
  const footer = await fetchCmsQuery(
    footerQuery,
    { id: "2TcXx7J7IPFgHVCRUupRtT" },
    false
  );
  console.log(JSON.stringify(footer, null, 2));
})();
