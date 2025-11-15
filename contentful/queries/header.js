export const headerQuery = `
  query headerQuery($id: String!) {
  header(id: $id) {
    internalTitleReference
    socialMediaCollection(limit: 6) {
      items {
        url
      }
    }
    navigationLinksCollection(limit: 6) {
      items {
        text
        url
      }
    }
  }
}`;
