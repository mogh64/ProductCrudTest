import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  
import * as productActions from '../../actions/productActions';
import ProductCategoryList from './ProductCategoryList';
import ProductForm from './ProductForm';


class ProductPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isEditing: false,
            product: this.props.product
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.updateProductState = this.updateProductState.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }
   
    componentWillReceiveProps(nextProps) {
        if (this.props.product.id != nextProps.product.id) {
            this.setState({ product: nextProps.product });
        }
        
    }
    toggleEdit() {
        this.setState({ isEditing: !this.state.isEditing });
    }
    deleteProduct(event) {
        this.props.actions.deleteProduct(this.state.product);
    }
    updateProductState(event) {
        const field = event.target.name;
        const product = this.state.product;
        product[field] = event.target.value;
        return this.setState({ product: product });
    }
    saveProduct(event) {
        event.preventDefault();
        this.props.actions.updateProduct(this.state.product);
    }
    render() {
        if (this.state.isEditing) {
            return (
                <div>
                    <h1>edit product</h1>
                    <ProductForm
                        product={this.state.product}

                        onSave={this.saveProduct}
                        onChange={this.updateProductState} />

                </div>
            );
        }
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>{this.state.product.title}</h1>
                <p>Model: {this.state.product.model}</p>
                <p>Price: {this.state.product.price}</p>               
               
                <button onClick={this.toggleEdit}>edit</button>
                <button
                    onClick={this.deleteProduct}
                    className="btn btn-default">
                    delete
               </button>
            </div>
        );
    }
}


ProductPage.propTypes = {
    product: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};
function getProductById(products, id) {
    let product = products.find(product => product.id == id);
    return Object.assign({}, product);
}
function mapStateToProps(state, ownProps) {
    debugger;
    let product = { title: '', model: '', price: '', categoryId: ''};
    const productId = ownProps.match.params.id;
    if (productId && state.products.length > 0) {
        product = getProductById(state.products, ownProps.match.params.id);

    }
    return { product: product };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);  