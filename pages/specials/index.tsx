import LayoutCardGalleryList from 'components/Lists/LayoutCardGalleryList';
import { fetchSingle } from 'services/core/fetchSingle';

export default function SpecialsHome({ response }) {
  return (
    <LayoutCardGalleryList
    postData={response} 
    layoutSection={`specials`}
    layoutTitle={`Specials`}
    layoutSlug={``}
    layoutDescription={`A deep dive in special stories from different subjects.`}
    />
  );
}

export async function getStaticProps() {
  return fetchSingle('specials', 'per_page=10');
}