import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/productActions';
import ProductForm from './ProductForm';


class NewProductPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                title: '',
                model: '',
                price: ''

            },
            saving: false
        };
        
        this.saveProduct = this.saveProduct.bind(this);

        this.updateProductState = this.updateProductState.bind(this);
    }

    updateProductState(event) {
        const field = event.target.name;
        const product = this.state.product;
        product[field] = event.target.value;
        return this.setState({ product: product });
    }

    saveProduct(event) {
        event.preventDefault();
        debugger;
        this.props.actions.createProduct(this.state.product);
    }

    render() {
        return (
            <div>
                <h1>new product</h1>
                <ProductForm
                    product={this.state.product}                    
                    onSave={this.saveProduct}
                    onChange={this.updateProductState} />                  
            </div>
        );
    }
}


NewProductPage.propTypes = {    
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  
    return {
       
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewProductPage);  