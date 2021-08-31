import './App.css';
import { Route } from "react-router-dom";
import React from 'react';
import Landing from './components/landing';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Landing } />
    </div>
  );
}

export default App;
