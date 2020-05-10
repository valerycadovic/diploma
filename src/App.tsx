import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './header/Header';
import { Container } from '@material-ui/core';
import { Page } from './Page/Page';

function App() {
  return (
    <BrowserRouter>
      <Container fixed>
        <Header />
        <Switch>
          <Redirect from="/page/home" to="/" />
          <Route exact path="/" component={Page} />
          <Route path="/page/:name" component={Page} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
