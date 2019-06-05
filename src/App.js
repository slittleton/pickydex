import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Content from './components/Content';

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Sidebar/>
    
          <div className="content">
          <Route exact path="/" component={Content}/>
          </div>
        
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
