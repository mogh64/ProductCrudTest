
import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductList from './ProductList';
import NewProductPage from './NewProductPage';

class ProductsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const products = this.props.products;
        return (
            <div className="col-md-12">
                <h1>Products <Link to={'/products/new'} className="btn btn-primary">+ product</Link></h1>
                <div className="col-md-4">
                    <ProductList products={products} />
                </div>
                <div className="col-md-8">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ProductsPage.propTypes = {
    products: PropTypes.array.isRequired,
    children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        products: state.products
    };
}

export default connect(mapStateToProps)(ProductsPage);