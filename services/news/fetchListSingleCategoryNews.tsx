export async function fetchListSingleCategoryNews(category: string, per_page: number) {
    const reqCategory = await fetch(`https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/categories?slug=${category}`);
    const categoryData = await reqCategory.json();

    if(categoryData.length == 0){
        return {
            notFound: true,
            revalidate: 600,
        };
    }
    else{
        const reqPosts = await fetch(`https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/posts?categories=${categoryData[0].id}&per_page=${per_page}`);
        const listPostData = await reqPosts.json();

        if(listPostData.length == 0){
            return {
                notFound: true,
                revalidate: 600,
            };
        }
        else{
            return {
                props: {
                    categoryData,
                    listPostData
                },
                revalidate: 600,
            };
        }
    }
}