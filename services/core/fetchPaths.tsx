/**
 * Function that returns a list of paths to be statically generated.
 * @param {string} endpoint with the endpoint to be fetched.
 * @param {number} level With the type of paths generated, '1' for Categories routes and '2' for Single routes.
 * @param {string} alternativeBasePath to the request.
 * @return {array}: returns a array of paths to be statically generated and the fallback strategy.
 */
export async function fetchPaths(
  endpoint: string,
  level: number,
  alternativeBasePath?: string
) {
  const basePathDomain = alternativeBasePath
    ? alternativeBasePath
    : process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH;

  const req = await fetch(`https://${basePathDomain}/${endpoint}`);
  const response = await req.json();

  const paths = // TODO: Find a more reduced way to do this
    endpoint === "web-stories"
      ? response.map((item) => ({
          params: {
            slug: item.slug,
          },
        }))
      : endpoint === "charts"
      ? response.map((item) => ({
          params:
            level == 1
              ? {
                  category: item.slug,
                }
              : {
                  category: item.ACF.chart_category_data.post_name,
                  slug: item.slug,
                },
        }))
      : response.map((item) => ({
          params:
            level == 1
              ? {
                  category: item.slug,
                }
              : {
                  category: item.categories_data[0].category_slug,
                  slug: item.slug,
                },
        }));
  return {
    paths,
    fallback: "blocking",
  };
}
