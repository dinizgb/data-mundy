export default function formatDate(date) {
    var d = new Date(date); 
    return d.toLocaleString("en-GB"); 
}