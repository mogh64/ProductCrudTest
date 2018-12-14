import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        console.log('Home');
        return (
            <div className="jumbotron">
                
                <h1>Product Catalog</h1>
                <p>the best way manage your Product collection.</p>
               
            </div>
        );
    }
}

export default HomePage;