/**
 * Function that returns data to be use on a single page.
 * @param {string} endpoint with the endpoint to be fetched.
 * @param {string} params to the request.
 * @param {string} alternativeBasePath to the request.
 * @return {object}: returns an object with the data according to the response.
 */
export async function fetchSingle(
  endpoint: string,
  params: string,
  alternativeBasePath?: string
) {
  const basePathDomain = alternativeBasePath
    ? alternativeBasePath
    : process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH;

  const req = await fetch(`https://${basePathDomain}/${endpoint}?${params}`);
  const response = await req.json();

  if (response.length == 0) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        response,
      },
    };
  }
}
