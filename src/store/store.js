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
import { favoriteReducer } from './favorites/favoritesSlice';

const favoritePersistConfig = {
  key: 'favorite',
  storage,
};

export const store = configureStore({
  reducer: {
    favorite:  persistReducer(favoritePersistConfig, favoriteReducer),
    camper: camperReducer,
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