import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TrelloPage from './Trello-Homemade/Trello-Page';

const App = () => {
  //
  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>My playgrond</p>
            <Link to="/trello">Trello HomeMade</Link>
          </header>
        </div>
      </Route>
      <Route path="/trello">
        <TrelloPage />
      </Route>
    </Switch>
  );
};

export default App;
