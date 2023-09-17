/*import './App.css';
import Logincard from './components/Logincard';
import Frontpage from './components/frontpage';

function App() {
  return (
    <div id="landing">
      <Frontpage></Frontpage>
      <Logincard></Logincard>
    </div>
    
  );
}

export default App;
*/
import './App.css';
import {Container} from "react-bootstrap";
import Header from './components/Header';
import HomePage from './screens/HomePage';

const App = () => {
  return (
    <>
      <HomePage/>
      <main className='py-3'>
        <Container>
        <h1>Welcome</h1>
        </Container>
      </main>
    </>
  );
}

export default App;
