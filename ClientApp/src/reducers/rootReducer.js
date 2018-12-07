// src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import products from './productReducer';
import productCategories from './productCategoryReducer';

const rootReducer = combineReducers({
    // short hand property names
    products,
    productCategories
});

export default rootReducer; 