import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { camperReducer } from './camper/camperSlice';

const camperPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['camperInfo'],
};

export const store = configureStore({
  reducer: {
    // favorite: persistReducer(authPersistConfig, authReducer),
    camper: persistReducer(camperPersistConfig, camperReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);