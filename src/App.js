import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// styles
import './App.css';

// import components
import SideNav from './Components/SideNav';
// import pages
import Home from './pages/Home';
import Collections from './pages/Collections';
import Dashboards from './pages/Dashboards';
import Graphs from './pages/Graphs';

function App() {
 
  return (
    <div className="App">
       
        <Router>
          <SideNav>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/collections" element={<Collections/>}></Route>
              <Route exact path="/dashboard" element={<Dashboards/>}></Route>
              <Route exact path="/graphs" element={<Graphs/>}></Route>
            </Routes>
          </SideNav>
        </Router>
      
      
    </div>
  );
}

export default App;
