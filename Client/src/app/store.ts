import counterReducer from '@features/counter/counterSlice';
import fetchDataApi from '@features/fetchData/fetchDataApi';
import { Action, configureStore, isRejectedWithValue, Middleware, MiddlewareAPI, ThunkAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const loggerError: Middleware = (_api: MiddlewareAPI) => (next) => (action) => {
	if (isRejectedWithValue(action)) {
		console.warn('We got a rejected action!');
		toast.error(action.reason);
	}

	return next(action);
};

function createStore() {
	return configureStore({
		reducer: {
			counter: counterReducer,
			[fetchDataApi.reducerPath]: fetchDataApi.reducer,
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([loggerError, fetchDataApi.middleware]),
	});
}

const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
