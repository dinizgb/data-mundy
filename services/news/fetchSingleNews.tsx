export async function fetchSingleNews(slug: string) {
    const reqSinglePost = await fetch(`https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/posts?slug=${slug}`);
    const singlePostData = await reqSinglePost.json();

    if(singlePostData.length == 0){
        return {
            notFound: true,
            revalidate: 600,
        };
    }
    else{
        return {
            props: {
                singlePostData
            },
            revalidate: 600,
        };
    }
}