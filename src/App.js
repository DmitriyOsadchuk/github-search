import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from './components/List';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/user-profile">
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;