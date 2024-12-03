
const teal = [153 , 212, 191]; // RGB for teal
const cyan = [0, 255, 255]; // RGB for cyan
const blue = [96, 165, 250]; // blue

function generateColors(start: number[], end: number[], steps:number): string[] {
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

const VerticalPctBarGraph: React.FC<{ data:{[key: string]: number}, barWidth:string}> = ({ data, barWidth }) => {
    const sections = Object.keys(data);
    const steps = sections.length;
    const colorlist = generateColors(teal, blue, steps);
    return (
      <div className="w-full h-full">
        <div className="h-full flex flex-col gap-1">
         { 
          sections.map((section, index) => (
            <div className="w-full flex flex-row rounded-md gap-1" style={{ height: data[section] + '%' }}>
                <div className="h-full rounded-md" style={{ backgroundColor: colorlist[index], width:barWidth }}></div>
                <label className="text-xs font-bold" style={{ color: colorlist[index] }}>{section} {data[section]}%</label>
            </div>
          ))
         }
        </div>
      </div>
    );
  };
  export default VerticalPctBarGraph;
  