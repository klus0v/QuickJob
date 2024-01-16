import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/search.slice';
import orderReducer from './slices/orders.slice';

const store = configureStore({
    reducer: {
        orders: orderReducer,
        search: searchReducer,
    },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
