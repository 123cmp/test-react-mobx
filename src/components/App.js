import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';

import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import Header from './shared/Header';

export default function App(props) {
  const { store } = props;
  return <BrowserRouter>
    <Header/>
    <Switch>
      <Route path="/product/:code" render={
        (props) => {
          return <ProductPage code={props.match.params.code} store={store}/>
        }
      }>
      </Route>
      <Route path="/">
         <ProductListPage store={store}/>
      </Route>
    </Switch>
  </BrowserRouter>
}
