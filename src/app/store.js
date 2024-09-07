import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import cartSlice from "../features/cart/cartSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  cart: cartSlice,
  auth: authSlice,
  // Add more reducers here
});
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({

  reducer: rootReducer,
})

const persistor = persistStore(store);
export { store };

