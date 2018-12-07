import React, { PropTypes } from 'react';
import TextInput from '../Input/TextInput';

class ProductForm extends React.Component {
    render() {
        const boxes = this.makeCheckBoxes();
        return (
            <div>
                <form>
                    <TextInput
                        name="title"
                        label="Title"
                        value={this.props.product.title}
                        onChange={this.props.onChange} />

                    <TextInput
                        name="model"
                        label="Model"
                        value={this.props.product.model}
                        onChange={this.props.onChange} />

                    <TextInput
                        name="price"
                        label="Price"
                        value={this.props.product.price}
                        onChange={this.props.onChange} />              

                    <input
                        type="submit"
                        disabled={this.props.saving}
                        className="btn btn-primary"
                        onClick={this.props.onSave} />
                </form>
            </div>
        );
    }
}

ProductForm.propTypes = {
    product: React.PropTypes.object.isRequired,    
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool
};

export default ProductForm; 