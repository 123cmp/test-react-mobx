import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Api from './api';
import Error from './components/Error';
import ProductStore from './stores/ProductStore';
import './style.css';

function createProductStore(snapshot) {
  return ProductStore.create(snapshot);
}

function renderApp(store) {
    render(<App store={store} />, document.getElementById("root"))
}

function renderError() {
    render(<Error/>, document.getElementById("root"))
}

(
  async () => {
    try {
      const response = await Api.get();
      const snapshot = await response.json();
      renderApp(createProductStore(snapshot));
    } catch(error) {
      console.error(error);
      renderError();
    }
  }
)();
