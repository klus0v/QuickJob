import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import searchReducer from './slices/search.slice';
import orderReducer from './slices/orders.slice';
import historyReducer from './slices/history.slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        history: historyReducer,
        orders: orderReducer,
        search: searchReducer,
    },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
