import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NewsForm } from './news/NewsForm';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NewsForm} />
        <Route>
          <span>Wrong Address!</span>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
