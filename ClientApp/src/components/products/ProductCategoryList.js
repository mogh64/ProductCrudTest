import React from 'react';
import PropTypes from 'prop-types';

const ProductCategoryList = ({ productCategories }) => {
    return (
        <div>
            <h3>Product Categories</h3>
            <ul>
                {productCategories.map(productCategory =>
                    <li key={productCategory.id}>{productCategory.title}</li>
                )}
            </ul>
        </div>
    );
};

ProductCategoryList.propTypes = {
    productCategories: PropTypes.array.isRequired
};

export default ProductCategoryList;  