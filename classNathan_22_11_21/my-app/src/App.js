import './App.css';
import Counter from './component/Counter';
import TwoCounter from './component/TwoCounter';
import TwoCounterSmart from './component/TwoCounterSmart';
import CounterSmart from './component/CounterSmart';
import ToggleColor from './component/ToggleColor';
import Input from './component/Input';
import CounterClick from './component/CounterHW';
import CounterTwoHW from './component/CounterTwoHW';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
    {/* <TwoCounter/> */}
    {/* <TwoCounterSmart/> */}
    {/* <CounterSmart initialValue={5}/>
    <CounterSmart initialValue={-11}/> */}
    
    {/* <ToggleColor text="hello"/> */}
    {/* <Input/> */}
    {/* <CounterClick startingPoint={10} text="counting UP"/> */}
    <CounterTwoHW textDown="Down" text="going UP" textUP="UP" textDown2="Down2" textUP2="up2"/>

    </div>
  );
}

export default App;
