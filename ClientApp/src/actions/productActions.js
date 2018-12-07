// src/actions/productActions.js

import productApi from '../api/productApi';
import * as types from './actionTypes'; 


export function loadProductsSuccess(products) {
    return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}
export function updateProductSuccess(product) {
    return { type: types.UPDATE_PRODUCT_SUCCESS, product };
}
export function deleteProductSuccess(product) {
    return { type: types.DELETE_PRODUCT_SUCCESS, product };
}
export function createProductSuccess(product) {
    return { type: types.CREATE_PRODUCT_SUCCESS, product };
}

export function updateProdcut(product) {
    return function (dispatch) {
        return productApi.updateProduct(product).then(responseProduct => {
            dispatch(updateProductSuccess(responseProduct));
        }).catch(error => {
            throw (error);
        });
    };
}
export function loadProducts() {
    return function (dispatch) {
        return productApi.getAll().then(products => {
            dispatch(loadProductsSuccess(products));
        }).catch(error => {
            throw (error);
        });
    };
}
export function deleteProduct(product) {
    return function (dispatch) {
        return productApi.deleteProduct(product).then(() => {

            dispatch(deleteProductSuccess(product));
            return;
        }).catch(error => {
            throw (error);
        });
    };
}
export function createProduct(product) {
    return function (dispatch) {
        return productApi.createProduct(product).then(responseProduct => {
            dispatch(createProductSuccess(responseProduct));
            return responseProduct;
        }).catch(error => {
            throw (error);
        });
    };
}
