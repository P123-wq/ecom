import './App.css';

import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          
            <Route path='/checkout' element={<><Header/> <Checkout/></>}></Route>
            <Route path='/' element={<><Header /> <Home /></>} />
          
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
