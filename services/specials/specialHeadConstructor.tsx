/**
 * Function that returns the an edited content for the head tag to the Specials Single Page.
 * @param {string} props with the raw head content.
 * @return {string}: with an edited content for the head tag to the Specials Single Page.
 */
export default function specialHeadConstructor(props: any) {
  let head = props.webStoriesHead;

  head = head.replace("<head>", " ").replace("</head>", "");
  head = head.replaceAll(
    `https://${process.env.NEXT_PUBLIC_ENV_WP_API_ROOT_PATH}/web-stories/`,
    `https://${process.env.NEXT_PUBLIC_ENV_DOMAIN}/specials/`
  );
  head = head.replaceAll("My Blog", "Data Mundy");

  return head;
}
