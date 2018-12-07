import React, { PropTypes } from 'react';
import Header from './common/Header';
import HomePage from './components/home/HomePage';
import ProductsPage from './components/products/ProductsPage';
import ProductPage from './components/products/ProductPage';
import NewProductPage from './components/products/NewProductPage';
class App extends React.Component {

    render() {
        console.log('app');
        return (
            <div className="container-fluid">
                <Header />
                
            </div>
        );
    }
}

export default App;  