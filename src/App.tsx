import './App.css';
import BarChart from './components/barchart';
import BarGraph from './components/bargraph';
import VerticalPctBarGraph from './components/verticalbargraph';

function App() {
  return (
    <>
      <h1 className='font-bold'>EXAMPLE WIDGETS</h1>
      <div className="w-96 pb-4">
        <BarGraph pct={67} itemName={'form'} />
      </div>
      <div className="flex flex-row gap-4">
        <div className="border-2 rounded-md p-4">
          <h1 className="pb-4">Vertical Bar Graph</h1>
          <div className='w-24 h-48'>
            <VerticalPctBarGraph data={{key1: 25, key2: 25, key3:50}} barWidth='0.25rem'/>

          </div>
        </div>
        <div className="border-2 rounded-md p-4">
          <h1>Bar Chart</h1>
          <div className='w-48 h-48'>
          <BarChart data={{Typescript: 6781, CSS: 5223, HTML:585}} barWidth='2rem' colors={['#73dfce', '#4cb7e2', '#3c85f3']}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
