export async function fetchSingle(endpoint: string, params: string) {
    const req = await fetch(`https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/${endpoint}?${params}`);
    const response = await req.json();

    if(response.length == 0){
        return {
            notFound: true,
        };
    }
    else{
        return {
            props: {
                response
            }
        };
    }
}