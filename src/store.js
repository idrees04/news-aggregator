// store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Assuming you'll have multiple reducers combined into a root reducer
import thunk from 'redux-thunk'; // Middleware for handling async actions

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
