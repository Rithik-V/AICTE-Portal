import './App.css';
import Logincard from './components/Logincard';
import Frontpage from './components/frontpage';
import Kavg from './components/kavg';
function App() {
  return (
    <div id="landing">
      <Frontpage></Frontpage>
      <Logincard></Logincard>
      <Kavg></Kavg>
    </div>
    
  );
}

export default App;
