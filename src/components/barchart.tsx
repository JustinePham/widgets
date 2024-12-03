 const BarChart: React.FC<{ data:{[key: string]: number}, barWidth:string, colors:string[]}> = ({ data, barWidth, colors }) => {
    const sections = Object.keys(data);
    const sum = Object.values(data).reduce((accumulator, current) => accumulator + current);
 
     return (
      <div className="w-full h-full">
        <div className="h-full flex flex-row gap-1 items-end">
         { 
            sections.map((section, index) => (
                <div className="w-full h-full flex flex-col justify-end rounded-md gap-1 items-center"  key={section}>
                    <div className=" rounded-md" style={{ backgroundColor: colors[index], width:barWidth, height: ((data[section] / sum) * 100) + "%"  }}></div>
                    <label className="text-xs font-bold text-center" style={{ color: colors[index] }}>{section} {data[section]}%</label>
                </div>
            ))
         }
        </div>
      </div>
    );
  };
  export default BarChart;
  