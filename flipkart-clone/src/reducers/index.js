import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';

const rootReducers = combineReducers({
    category: categoryReducer,
    product: productReducer
});

export default rootReducers;