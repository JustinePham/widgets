export function getPct(obj: any) {
    const filled = Object.values(obj).filter((value) => value !== '').length;
    const total = Object.keys(obj).length;
    return (filled / total) * 100;
}

export const teal = [153 , 212, 191]; // RGB for teal
export const cyan = [0, 255, 255]; // RGB for cyan
export const blue = [96, 165, 250]; // blue

export function generateColors(start: number[], end: number[], steps:number): string[] {
    const interpolate = (start: number, end: number, factor: number) =>
        Math.round(start + factor * (end - start));

    const colorList: string[] = [];
    for (let i = 0; i < steps; i++) {
        const factor = i / (steps - 1); // Divide range into three parts
        const r = interpolate(start[0], end[0], factor);
        const g = interpolate(start[1], end[1], factor);
        const b = interpolate(start[2], end[2], factor);
        colorList.push(`#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`);
    }
    return colorList;
}