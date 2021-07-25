import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
