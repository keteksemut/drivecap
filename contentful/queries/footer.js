export const footerQuery = `
  query footerQuery($id: String!) {
  footer(id: $id) {
    internalTitleReference
    address
    headline
    leftLinksColumnCollection(limit: 6) {
      items {
        text
        url
      }
    }
    rightLinksColumnCollection(limit: 6) {
      items {
        text
        url
      }
    }
    lottieAsset {
      url
    }
    socialLinksCollection(limit: 6) {
      items {
        text
        url
      }
    }
  }
}`
