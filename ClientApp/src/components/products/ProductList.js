import React, { PropTypes } from 'react';

const ProductList = ({ products }) => {
    return (
        <ul className="list-group">
            {products.map(product =>
                <li className="list-group-item" key={product.id}>
                    {product.title}
                </li>
            )}
        </ul>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductList;  