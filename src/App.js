/*import './App.css';
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
*/
import './App.css';
import {Container} from "react-bootstrap";
import HomePage from './screens/HomePage';
import Kavg from './components/kavg';
import LoginPage from './screens/LoginPage';
import Signup from './screens/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element = {<Signup/>}></Route>
        <Route path='/login' element = {<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
