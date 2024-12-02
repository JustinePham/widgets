// justine's pretty ass bargraph


const BarGraph: React.FC<{ pct: any, itemName: string }> = ({ pct, itemName = '' }) => {
  if (!pct) pct = 0;
  
  return (
    <div className="w-full ">
      <div className="w-full flex flex-col pt-1 pb-1 gap-2 items-start">
        {itemName ? (
          <label className="text-xs font-bold">
            {itemName} is {pct}% complete
          </label>
        ) : ('')}
        <div className="rounded-md h-1 bg-cyan-100 inline-flex w-full">
        <span className="h-1 bg-gradient-to-r from-teal-300 to-blue-500 rounded-md "
          style={{ width: pct + '%' }}></span>
        </div>
      </div>
    </div>
  );
};
export default BarGraph;


