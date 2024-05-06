import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import booklistReducer from './BooklistSlice';

const persistConfig = {
  key: 'root',
  storage,
  migrate: createMigrate(
    (state) => {
      const { register, ...rest } = state;
      return rest;
    },
    (state) => state,
  ),
};

const rootReducer = combineReducers({
  booklist: persistReducer(persistConfig, booklistReducer),
});

export default rootReducer;