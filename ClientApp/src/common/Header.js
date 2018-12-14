import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/"
                activeClassName="active">Home</NavLink >
            {" | "}
            <NavLink to="/products" activeClassName="active">Products</NavLink>
        </nav>
    );
};

export default Header;  