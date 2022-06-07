/* eslint-disable camelcase */
/**
 * Sitemap Index Page.
 * @return {TSX.Element}: with the sitemap index page.
 */
export async function middleware() {
  const reqPosts = await fetch(
    `https://${process.env.NEXT_PUBLIC_ENV_WP_API_BASE_PATH}/posts?per_page=50`
  );
  const postsData = await reqPosts.json();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${postsData
          .map(
            ({
              slug,
              categories_data,
              date,
              modified,
              title,
              tags_data,
              featured_media_url,
            }) => {
              let img = "";
              if (featured_media_url) {
                img = `<image:image><image:loc>${featured_media_url.replace(
                  /&/g,
                  "&amp;"
                )}</image:loc></image:image>`;
              }
              return `
                <url>
                    <loc>https://${process.env.NEXT_PUBLIC_ENV_DOMAIN}/news/${
                categories_data[0].category_slug
              }/${slug}/</loc>
                    <news:news>
                        <news:publication>
                            <news:name>Data Mundy</news:name>
                            <news:language>en</news:language>
                        </news:publication>
                        <news:publication_date>${date}</news:publication_date>
                        <news:title>${title.rendered}</news:title>
                        <news:keywords>${
                          categories_data[0].category_name
                        }, ${tags_data
                ?.map((item) => item.name)
                .join(", ")}</news:keywords>
                    </news:news>
                    ${img}
                    <lastmod>${modified}</lastmod>
                </url>
                `;
            }
          )
          .join("")}
    </urlset>
    `;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": "max-age=60, s-maxage=60, stale-while-revalidate=59",
    },
  });
}
