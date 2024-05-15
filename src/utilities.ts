/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const timeString = (datetime: Date | null = null, locale: [] = [], options: any = { hour: "2-digit", minute: "2-digit", hour12: true }) => {
    const dateObject: Date = datetime == null ? (new Date) : datetime;
    return dateObject.toLocaleTimeString(locale, options);
    // [], { hour: "2-digit", minute: "2-digit" }
}

export const queryparams = (search:string) => {
    return (new URL(document.location.toString()).searchParams).get(search);
}
