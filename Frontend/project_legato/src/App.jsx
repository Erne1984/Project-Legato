import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useState } from "react";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Explorar from './pages/Explorar/Explorar';
import Perfil_Usuario from './pages/Perfil_Usuario/Perfil_Usuario';
import Transcricao from './pages/Transcricao/Transcricao';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyles } from './GlobalStyle';

function App() {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light')
  }

  return (

    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
          <Header themeToggler={themeToggler} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Explorar" element={<Explorar />} />
            <Route path="/Perfil" element={<Perfil_Usuario />} />
            <Route path={`/transcricao`} element={<Transcricao />} />

          </Routes>
          <Footer />
      </ThemeProvider>
    </Router>

  );
}

export default App;
