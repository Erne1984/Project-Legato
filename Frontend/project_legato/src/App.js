import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';

import './App.css';

function App() {
  return (
  
    <Router>
    <Header></Header>
    <Routes>
      <Route path="/" element={ <Home/> } />
    </Routes>
  </Router>

  );
}

export default App;
