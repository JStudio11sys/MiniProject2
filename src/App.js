//import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import MainPage from './components/MainPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//import Navigation from './components/Navigation'
import Layout from './components/Layout';
import WorldNews from './components/WorldNews'
import BusinessNews from './components/BusinessNews'
import LifeStyleNews from './components/LifeStyleNews'
import SportsNews from './components/SportsNews'
import EntertainmentNews from './components/EntertainmentNews'
import TechNews from './components/TechNews'
import OpinionNews from './components/OpinionNews'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />}></Route>
            <Route path="world-news" element={<WorldNews />}></Route>
            <Route path="business-news" element={<BusinessNews />}></Route>
            <Route path="opinion-news" element={<OpinionNews />}></Route>
            <Route path="lifestyle-news" element={<LifeStyleNews />}></Route>
            <Route path="sports-news" element={<SportsNews />}></Route>
            <Route path="entertainment-news" element={<EntertainmentNews />}></Route>
            <Route path="tech-news" element={<TechNews />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
    
    ///<React.Fragment> 
       // <MainPage />
    //</React.Fragment>
  );
}

export default App;
