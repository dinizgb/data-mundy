/**
 * Function that returns the an edited content for the head tag to the Specials Single Page.
 * @param {string} props with the raw head content.
 * @return {string}: with an edited content for the head tag to the Specials Single Page.
 */
export default function specialHeadConstructor(props: any) {
  let head = props.webStoriesHead;
  const sourceCanonicalUrl = `https://${process.env.NEXT_PUBLIC_ENV_WP_API_ROOT_PATH}/web-stories/`;

  head = head.replace("<head>", " ").replace("</head>", "");
  head = head.replace(
    new RegExp(sourceCanonicalUrl, "g"),
    `https://${process.env.NEXT_PUBLIC_ENV_DOMAIN}/specials/`
  );

  return head;
}
