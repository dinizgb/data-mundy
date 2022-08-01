/**
 * Function that returns data to a single category page.
 * @param {string} categoryEndpoint with the category endpoint to be fetched.
 * @param {string} categoryParams to the category request.
 * @param {string} singleEndpoint with the single endpoint to be fetched.
 * @param {string} singleBaseParam to the single request.
 * @param {string} singleOtherParams to the single request.
 * @param {string} alternativeBasePath to the request.
 * @return {object}: returns an object with the data according to the response.
 */
export async function fetchSingleByCategory(
  categoryEndpoint: string,
  categoryParams: string,
  singleEndpoint: string,
  singleBaseParam: string,
  singleOtherParams: string,
  alternativeBasePath?: string
) {
  const basePathDomain = alternativeBasePath
    ? alternativeBasePath
    : process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH;

  const reqCategory = await fetch(
    `https://${basePathDomain}/${categoryEndpoint}?${categoryParams}`
  );
  const categoryData = await reqCategory.json();

  if (categoryData.length == 0) {
    return {
      notFound: true,
    };
  } else {
    const reqSingle = await fetch(
      `https://${basePathDomain}/${singleEndpoint}?${singleBaseParam}=${categoryData[0].id}&${singleOtherParams}`
    );

    if (reqSingle == null) {
      return {
        notFound: true,
      };
    } else {
      const listSingleData = await reqSingle.json();
      return {
        props: {
          categoryData,
          listSingleData,
        },
      };
    }
  }
}
