import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Explorar from './pages/Explorar/Explorar';

import './App.css';
import Perfil from './components/Perfil/Perfil';
import Transcricao from './pages/Transcricao/Transcricao';

function App() {
  return (
  
    <Router>
    <Header></Header>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/Explorar" element={ <Explorar/> } />
      <Route path="/Perfil" element={ <Perfil/> } />
      <Route path={`/transcricao`} element={ <Transcricao/> } />

    </Routes>
    <Footer/>
  </Router>

  );
}

export default App;
