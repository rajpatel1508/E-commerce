import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';

const rootReducers = combineReducers({
    category: categoryReducer,
});

export default rootReducers;