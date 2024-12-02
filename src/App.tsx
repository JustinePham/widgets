import './App.css';
import BarGraph from './components/bargraph';

const MOCKDATA = {
  field1: '23234',
  field2: '23434',
  field3: '',
};

function App() {
  return (
    <>
      <div className="w-96">
        <BarGraph data={MOCKDATA} />
      </div>
    </>
  );
}

export default App;
