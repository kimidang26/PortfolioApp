import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topnav from './components/navbar/Topnav';
import React from 'react';
import Home from './components/pages/home';
import RunInfo from './components/pages/runInfo';
import Projects from './components/pages/projects';
import Socialmedia from './components/pages/socialmedia';
import Contact from './components/pages/contact';

function App() {


  return (
    <div className="App">
      <Router>
        <Topnav/>
          <Routes>
            <Route path="/" element={<Home/>} > 
            </Route>
            <Route path="/runinfo" element={<RunInfo/>} > 
            </Route>
            <Route path="/projects" element={<Projects/>} > 
            </Route>
            <Route path="/socialmedia" element={<Socialmedia/>} > 
            </Route>
            <Route path="/contact" element={<Contact/>} > 
            </Route>
          </Routes>
      </Router>


    </div>
  );
}

export default App;
