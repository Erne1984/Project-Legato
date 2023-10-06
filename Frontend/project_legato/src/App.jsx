import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Explorar from './pages/Explorar/Explorar';
import Perfil_Usuario from './pages/Perfil_Usuario/Perfil_Usuario';
import Transcricao from './pages/Transcricao/Transcricao';
import Acessibilidade from './components/Acessibilidade/Acessibilidade';

function App() {
  return (
  
    <Router>
    <Acessibilidade/>
    <Header/>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/Explorar" element={ <Explorar/> } />
      <Route path="/Perfil" element={ <Perfil_Usuario/> } />
      <Route path={`/transcricao`} element={ <Transcricao/> } />

    </Routes>
    <Footer/>
  </Router>

  );
}

export default App;
