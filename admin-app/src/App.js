import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './containers/home';
import Signin from './containers/signin';
import Signup from './containers/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
