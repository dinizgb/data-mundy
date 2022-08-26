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

  const authReq = await fetch(
    new Request(`https://${process.env.NEXT_PUBLIC_ENV_WP_AUTH_PATH}`, {
      method: "POST",
      body: JSON.stringify({
        username: process.env.API_USER,
        password: process.env.API_PASS,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
  ).then((r) => r.json());

  const reqCategory = await fetch(
    `https://${basePathDomain}/${categoryEndpoint}?${categoryParams}`,
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${authReq.jwt_token}`,
      }),
    }
  );
  const categoryData = await reqCategory.json();

  if (categoryData.length == 0) {
    return {
      notFound: true,
    };
  } else {
    const reqSingle = await fetch(
      `https://${basePathDomain}/${singleEndpoint}?${singleBaseParam}=${categoryData[0].id}&${singleOtherParams}`,
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${authReq.jwt_token}`,
        }),
      }
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
