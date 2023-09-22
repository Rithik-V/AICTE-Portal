<<<<<<< Updated upstream
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
    
=======
import './App.css';
import HomePage from './screens/HomePage';
import Coursepage from "./screens/Coursepage"
import Kavg from "./components/kavg"
import Cirriculum from './screens/curriculum';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './screens/LoginPage';
import Signup from './screens/Signup';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/courses" element={<Coursepage/>}></Route>
    </Routes>
  </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
*/
import './App.css';
import {Container} from "react-bootstrap";
import HomePage from './screens/HomePage';
import Kavg from './components/kavg';
import LoginPage from './screens/LoginPage';
import Coursepage from './screens/Coursepage';
import Signup from './screens/Signup';
import Chat from './screens/Chat'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element = {<Signup/>}></Route>
        <Route path='/login' element = {<LoginPage/>}></Route>
        <Route path='/courses' element = {<Coursepage/>}></Route>
        <Route path='/forum' element = {<Chat/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
