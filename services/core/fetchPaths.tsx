//Levels: [1]: Categories, [2]: Single
export async function fetchPaths(endpoint: string, level: number) {
    const req = await fetch(`https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/${endpoint}`);
    const response = await req.json();

    const paths = //TODO: Find a more reduced way to do this
        endpoint === 'specials' ?
            response.map(item => ({
                params: 
                    {
                        slug: item.slug
                    }
            }))
        :
        endpoint === 'charts' ?
            response.map(item => ({
                params: 
                level == 1 ? {
                    category: item.slug
                } 
                : 
                {
                    category: item.ACF.chart_category_data.post_name,
                    slug: item.slug,
                }
            }))
        :
            response.map(item => ({
                params: 
                level == 1 ? {
                    category: item.slug
                } 
                : 
                {
                    category: item.categories_data[0].category_slug,
                    slug: item.slug,
                }
            }))
    ;

    return {
        paths,
        fallback: 'blocking',
    };
}