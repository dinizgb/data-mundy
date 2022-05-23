/**
 * Function that returns data to a single category page.
 * @param {string} categoryEndpoint with the category endpoint to be fetched.
 * @param {string} categoryParams to the category request.
 * @param {string} singleEndpoint with the single endpoint to be fetched.
 * @param {string} singleBaseParam to the single request.
 * @param {string} singleOtherParams to the single request
 * @return {object}: returns an object with the data according to the response.
 */
export async function fetchSingleByCategory(
  categoryEndpoint: string,
  categoryParams: string,
  singleEndpoint: string,
  singleBaseParam: string,
  singleOtherParams: string
) {
  const reqCategory = await fetch(
    `https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/${categoryEndpoint}?${categoryParams}`
  );
  const categoryData = await reqCategory.json();

  if (categoryData.length == 0) {
    return {
      notFound: true,
    };
  } else {
    const reqSingle = await fetch(
      `https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/${singleEndpoint}?${singleBaseParam}=${categoryData[0].id}&${singleOtherParams}`
    );
    const listSingleData = await reqSingle.json();

    if (listSingleData.length == 0) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          categoryData,
          listSingleData,
        },
      };
    }
  }
}
