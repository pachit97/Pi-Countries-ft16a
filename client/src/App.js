import './App.css';
import { Route } from "react-router-dom";
import React from 'react';
import Landing from './components/landing';
import Countries from './components/countries/countries';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Landing } />
      <Route exact path="/home" component={ Home } />
    </div>
  );
}

export default App;
