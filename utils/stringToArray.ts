export default function stringToArray(string: string, separator: string, convertTo?: string) {
    return convertTo == 'number' ? string.split(separator).map(Number) : string.split(separator);
}