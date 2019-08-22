import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/layout/NavBar.js';
import PokemonList from './components/pokemon/PokemonList';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
function App() {
  return (
    <Router>
    <div className="App">
    <NavBar></NavBar>
     
        <img src={logo} className="App-logo" alt="logo" />
     <Switch>
          <Route exact path="/" component={Dashboard} />
        { <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />}
  </Switch> 
      
    </div>
    </Router>
  );
}

export default App;
