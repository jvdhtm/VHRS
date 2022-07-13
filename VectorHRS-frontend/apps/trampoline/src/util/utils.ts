export function toNumber(value: any): number {
    if (value == null) return 0;
    if (typeof value === "number") return value;
    return parseInt(value, 10);
}

export function toString(value: any): string {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return `${value}`;
}