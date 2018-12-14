import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ProductsPage from './components/products/ProductsPage';
import ProductPage from './components/products/ProductPage';
import NewProductPage from './components/products/NewProductPage';
class App extends React.Component {

    render() {
        console.log('my app');
        return (
            <Router>
            <div className="container-fluid">
                <Header />
                   
                    <Route exact path="/" component={HomePage} />
                        <Route path="/products" component={ProductsPage} />
                        <Route path="/products/new" component={NewProductPage} />
                        <Route path="/products/:id" component={ProductPage} />
                        
                   
                </div>
            </Router>
        );
    }
}

export default App;  