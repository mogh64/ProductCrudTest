import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import { loadProducts } from './actions/productActions';
import { loadProductCategories } from './actions/productCategoryActions';
import  App  from './App';
const store = configureStore();

store.dispatch(loadProducts());
store.dispatch(loadProductCategories());

render(
    <Provider store={store}>       
      <App />  
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
