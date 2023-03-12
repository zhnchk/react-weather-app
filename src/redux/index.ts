// redux
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import forecastReducer from './slices/forecastSlice';
import settingsReducer from './slices/settingsSlice';
// redux persist
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['settings'],
};

const lastCityPersistConfig = {
	key: 'forecast',
	storage,
	whitelist: ['lastFetchedCity'],
};

const rootReducer = combineReducers({
	forecast: persistReducer(lastCityPersistConfig, forecastReducer),
	settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
