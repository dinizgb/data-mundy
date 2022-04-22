export async function fetchCategoryNewsPaths() {
    const reqCategory = await fetch(`https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/categories`);
    const categoryData = await reqCategory.json();

    const paths = categoryData.map(item => ({
        params: {
            category: item.slug,
        },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
}