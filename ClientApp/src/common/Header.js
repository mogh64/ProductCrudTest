import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link exact to="/"
                activeClassName="active">Home</Link >
            {" | "}
            <Link to="/products" activeClassName="active">Products</Link>
        </nav>
    );
};

export default Header;  