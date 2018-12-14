import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    return (
        <ul className="list-group">
            {
                products.map(product =>
                    <li className="list-group-item" key={product.id}>
                        <Link to={'/products/' + product.id}>
                            {product.title}</Link>
                    </li>
                )
            }
        </ul>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductList;  