import { FC } from 'react';

const BarChart: FC<{ data:{[key: string]: number}, barWidth:string, colors:string[]}> = ({ data, barWidth, colors }) => {
    const sections = Object.keys(data);
    const sum = Object.values(data).reduce((accumulator, current) => accumulator + current);
 
     return (
        <div className="h-full flex flex-row gap-1 items-end">
         { 
            sections.map((section, index) => (
            <div className="w-full h-full flex flex-col justify-end rounded-md gap-1 items-center"  key={section}>
                <div className='h-4/5 flex flex-col justify-end'>
                    <label className="text-xs font-bold text-center" style={{ color: colors[index] }}>{data[section]}</label>
                    <div className=" rounded-md" style={{ backgroundColor: colors[index], width:barWidth, height: ((data[section] / sum) * 100) + "%"  }}></div>
                </div>
                <label className="text-xs font-bold text-center h-1/5" style={{ color: colors[index] }}>{section}</label>
            </div>
            ))
         }
        </div>
    );
  };
  export default BarChart;
  