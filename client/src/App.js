import './App.css';
import { Route } from "react-router-dom";
import React from 'react';
import Landing from './components/landing';
import Countries from './components/countries/countries';
import Home from './components/home/home';
import createActivity from './components/form/createActivity';
import countryDetail from "./components/countryDetail/countryDetail"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Landing } />
      <Route exact path="/home" component={ Home } />
      <Route exact path="/countries/:id" component= { countryDetail } />
      <Route path="/home/createActivity" component= { createActivity } />
    </div>
  );
}

export default App;
