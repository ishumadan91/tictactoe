import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './pages/app.jsx';
import GameBoard from './pages/gameBoard.jsx';
import Menu from './pages/menu.jsx';
import NotFound from './pages/notFound.jsx';

var routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="menu" handler={ Menu } />
    <Route name="start" handler={ GameBoard } />
    <DefaultRoute handler={ Menu } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

export default routes;