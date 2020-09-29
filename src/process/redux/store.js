import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/rootReducer';
//Middlewares
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const initialState = {};
const middleware = [thunk, logger];

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
)
export const persistor = persistStore(store);

export default { store, persistor };
