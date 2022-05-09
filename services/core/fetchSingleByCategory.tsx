export async function fetchSingleByCategory(categoryEndpoint: string, categoryParams: string, singleEndpoint: string, singleBaseParam: string, singleOtherParams: string) {
    const reqCategory = await fetch(`https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/${categoryEndpoint}?${categoryParams}`);
    const categoryData = await reqCategory.json();

    if(categoryData.length == 0){
        return {
            notFound: true,
        };
    }
    else{
        const reqSingle = await fetch(`https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/${singleEndpoint}?${singleBaseParam}=${categoryData[0].id}&${singleOtherParams}`);
        const listSingleData = await reqSingle.json();

        if(listSingleData.length == 0){
            return {
                notFound: true,
            };
        }
        else{
            return {
                props: {
                    categoryData,
                    listSingleData
                },
            };
        }
    }
}