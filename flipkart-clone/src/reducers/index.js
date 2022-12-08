import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import cartReducer from './cart.reducer';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';

const rootReducers = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    authReducer: authReducer,
    cart: cartReducer
});

export default rootReducers;