import React from 'react'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/Card.jsx';
import Aptitudes from './components/Aptitudes/Aptitudes.jsx';
import Info from './components/Info/Info.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (

    <div>
      <Header />
      
      <Router>
        <Main />
      </Router>

      <Aptitudes/>

      <Info/>

      <Footer/>
    </div>
  )
}
