// justine's pretty ass bargraph

function getPct(obj: any) {
  const filled = Object.values(obj).filter((value) => value !== '').length;
  const total = Object.keys(obj).length;
  return (filled / total) * 100;
}
const BarGraph: React.FC<{ data: any }> = ({ data }) => {
  if (!Object.keys(data).values) return;

  return (
    <div className="w-full ">
      <div className="w-full flex flex-col pt-1 pb-1 gap-2 items-start">
        <label className="text-xs font-bold">
          Item is {Math.floor(getPct(data))}% complete!
        </label>
        <div className="rounded-md h-1 bg-green-200  inline-flex w-full">
        <span className="h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-md "
          style={{ width: Math.floor(getPct(data)) + '%' }}></span>
        </div>
      </div>
    </div>
  );
};
export default BarGraph;
