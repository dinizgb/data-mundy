export async function fetchSingleNewsPaths() {
    const reqPosts = await fetch(`https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/posts`);
    const postsData = await reqPosts.json();

    const paths = postsData.map(item => ({
        params: {
            category: item.categories_data[0].category_slug,
            slug: item.slug,
        },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
}