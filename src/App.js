import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Content from "./components/Content";
import Landing from "./components/Landing";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
      </BrowserRouter>
    </div>
  );
};

export default App;
