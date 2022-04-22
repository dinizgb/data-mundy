export async function fetchListNews(per_page: number) {
    const reqPosts = await fetch(`https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/posts?per_page=${per_page}`);
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
                listPostData
            },
            revalidate: 600,
        };
    }
}