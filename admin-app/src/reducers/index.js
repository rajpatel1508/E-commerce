import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import userReducer from './user.reducer';
import productReducer from './product.reducer';
import categoryReducer from './category.reducer';
import orderReducer from './order.reducer';
const rootReducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    order: orderReducer,
    product: productReducer
});

export default rootReducers;