import React from 'react';
import { Route} from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import ProductsPage from './components/products/ProductsPage';
import ProductPage from './components/products/ProductPage';
import NewProductPage from './components/products/NewProductPage';

export default routes(
    <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductsPage} >
            <Route path="/products/new" component={NewProductPage} />
            <Route path="/products/:id" component={ProductPage} />
        </Route>
    </div>    
);