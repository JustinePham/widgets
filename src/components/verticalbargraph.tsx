import {blue, generateColors, teal} from '../utils'
import { FC } from 'react';

const VerticalPctBarGraph: FC<{ data:{[key: string]: number}, barWidth:string}> = ({ data, barWidth }) => {
    const sections = Object.keys(data);
    const steps = sections.length;
    const colorlist = generateColors(teal, blue, steps);
    return (
      <div className="w-full h-full">
        <div className="h-full flex flex-col gap-1">
         { 
            sections.map((section, index) => (
              <div className="w-full flex flex-row rounded-md gap-1" style={{ height: data[section] + '%' }} key={section}>
                <div className="h-full rounded-md transition" style={{ backgroundColor: colorlist[index], width:barWidth }}></div>
                <label className="text-xs font-bold" style={{ color: colorlist[index] }}>{section} {data[section]}%</label>
              </div>
          ))
         }
        </div>
      </div>
    );
  };
  export default VerticalPctBarGraph;
  