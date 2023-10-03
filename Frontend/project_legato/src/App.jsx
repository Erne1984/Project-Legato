import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Explorar from './pages/Explorar/Explorar';

import './App.css';

function App() {
  return (
  
    <Router>
    <Header></Header>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/Explorar" element={ <Explorar/> } />

    </Routes>
  </Router>

  );
}

export default App;
