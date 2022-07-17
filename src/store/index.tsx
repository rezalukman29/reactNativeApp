import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from './category/categoryReducer';
import placesReducer from './places/placesReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
 category: categoryReducer,
 places: placesReducer,
 user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type ReduxState = ReturnType<typeof rootReducer>;

export default store;