import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './header/Header';
import { Container } from '@material-ui/core';
import { Page } from './page/Page';
import { NewsDetailed } from './news/NewsDetailed';
import { NewsForm } from './news/NewsForm';

function App() {
  return (
    <BrowserRouter>
      <Container fixed>
        <Header />
        <Switch>
          <Redirect from="/page/home" to="/" />
          <Route exact path="/" component={Page} />
          <Route path="/page/blogs" component={NewsForm} />
          <Route path="/page/:name" component={Page} />
          <Route path="/news/:newsId" component={NewsDetailed} />
          <Route>
            <span>Wrong Address!</span>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
