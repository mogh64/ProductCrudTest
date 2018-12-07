// src/actions/productCategeryActions.js

import * as types from './actionTypes';
import productCategoryApi from '../api/productCategoryApi';

export function loadProductCategoriesSuccess(productCategories) {
    return { type: types.LOAD_PRODUCTCATEGORIES_SUCCESS, productCategories };
}

export function loadProductCategories() {
    return function (dispatch) {
        return productCategoryApi.getAll().then(productCategories => {
            dispatch(loadProductCategoriesSuccess(productCategories));
        }).catch(error => {
            throw (error);
        });
    };
}