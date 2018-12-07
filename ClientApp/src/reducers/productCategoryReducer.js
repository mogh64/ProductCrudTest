import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.productCategories, action) {
    switch (action.type) {
        case types.LOAD_PRODUCTCATEGORIES_SUCCESS:
            return action.productCategories;
        default:
            return state;
    }
}