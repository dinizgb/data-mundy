export default function htmlTagCleaner(text) {
    return text.replace(new RegExp('(<([^>]+)>)', 'g'), '');
}