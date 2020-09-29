import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Reducers
import userReducer from './userReducer';
import clientReducer from './clientReducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}
const rootReducer = combineReducers({
  user: userReducer,
  client: clientReducer
})
export default persistReducer(persistConfig, rootReducer);
