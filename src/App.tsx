import './App.css';
import BarGraph from './components/bargraph';
import VerticalPctBarGraph from './components/verticalbargraph';

 
function getPct(obj: any) {
  const filled = Object.values(obj).filter((value) => value !== '').length;
  const total = Object.keys(obj).length;
  return (filled / total) * 100;
}
function App() {
  return (
    <>
      <div className="w-96 pb-4">
        <BarGraph pct={10} itemName={'item'} />
      </div>
      <div className="w-48 h-48">
        <h1>Vertical bar graph</h1>
        <VerticalPctBarGraph data={{key1: 25, key2: 25, key3:50}} barWidth='0.25rem'/>
      </div>
    </>
  );
}

export default App;
