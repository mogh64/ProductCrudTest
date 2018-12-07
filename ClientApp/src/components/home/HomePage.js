import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        console.log('Home');
        return (
            <div className="jumbotron">
                
                <h1>Product Catalog</h1>
                <p>the best way manage your Product collection.</p>
                <Link to="login" className="btn btn-primary btn-lg">log in as a test user</Link>
            </div>
        );
    }
}

export default HomePage;