import { getLayoutProps } from "./getLayoutProps";;

export function withLayout(getStaticPropsFunc) {
  return async (context) => {
    const layoutProps = await getLayoutProps();

    if (getStaticPropsFunc) {
      const pageProps = await getStaticPropsFunc(context);

      return {
        ...pageProps,
        props: {
          ...layoutProps,
          ...pageProps.props,
        }
      }
    }

    return {
      props: {
        ...layoutProps,
      },
      revalidate: 60,
    }
  }
}
