import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import OrdersService from '../../services/orders.service';
import {
    ApiQueryParamsOrders,
    FoundItemOrder,
    FrontObject,
    Job,
    UserInfo,
} from '../../constants/types';
import AuthService from '../../services/auth.service';

const ORDERS_STATE: FrontObject = {
    foundItems: [],
    totalCount: 0,
};
export const getOrdersThunk = createAsyncThunk(
    'orders/getOrders',
    async function (_, { rejectWithValue, getState }) {
        try {
            const { search } = getState() as { search: ApiQueryParamsOrders };
            const response = await OrdersService.getOrders(search);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
export const getOrderItemThunk = createAsyncThunk(
    'orders/getOrderItem',
    async function (id: string, { rejectWithValue, getState }) {
        try {
            const response = await OrdersService.getOrderItem(id);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
export const postOrdersThunk = createAsyncThunk(
    'orders/postOrders',
    async function (data: Job, { rejectWithValue }) {
        try {
            const response = await OrdersService.postOrder(data);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const getUserThunk = createAsyncThunk(
    'orders/getUser',
    async function (id: string, { rejectWithValue }) {
        try {
            return await AuthService.getUser(id);
        } catch {
            return rejectWithValue('Server error!');
        }
    },
);

export const orderResponseFromUserThunk = createAsyncThunk(
    'orders/orderResponse',
    async function (id: string, { rejectWithValue }) {
        try {
            return await OrdersService.orderResponseFromUser(id);
        } catch {
            return rejectWithValue('Server error!');
        }
    },
);

const newsSlice = createSlice({
    name: 'orders',
    initialState: ORDERS_STATE,
    reducers: {
        addOrder: (state, action: PayloadAction<FoundItemOrder>) => {
            state.foundItems.push(action.payload);
            state.totalCount += 1;
        },
        removeOrder: (state, action: PayloadAction<string>) => {
            state.foundItems = state.foundItems.filter(
                order => order.id !== action.payload,
            );
            state.totalCount -= 1;
        },
        updateOrder: (state, action: PayloadAction<FoundItemOrder>) => {
            const index = state.foundItems.findIndex(
                order => order.id === action.payload.id,
            );
            if (index !== -1) {
                state.foundItems[index] = action.payload;
            }
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getOrdersThunk.fulfilled, (state, action) => {
                state.foundItems = action.payload.foundItems;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(getOrdersThunk.pending, (state, action) => {
                state.foundItems = [];
                state.totalCount = 0;
            })
            .addCase(getOrdersThunk.rejected, (state, action) => {})
            .addCase(postOrdersThunk.fulfilled, (state, action) => {})
            .addCase(postOrdersThunk.rejected, (state, action) => {
                console.log(action);
            })
            .addCase(getOrderItemThunk.fulfilled, (state, action) => {
                state.item = action.payload;
            })
            .addCase(getOrderItemThunk.pending, (state, action) => {
                state.item = {} as FoundItemOrder;
            })
            .addCase(getUserThunk.fulfilled, (state, action) => {
                state.item.customerInfo = action.payload;
            })
            .addCase(getUserThunk.pending, (state, action) => {
                state.item.customerInfo = {} as UserInfo;
            })
            .addCase(
                orderResponseFromUserThunk.fulfilled,
                (state, action) => {},
            )
            .addCase(orderResponseFromUserThunk.pending, (state, action) => {
                state.error = '';
            })
            .addCase(orderResponseFromUserThunk.rejected, (state, action) => {
                state.error = action.error;
            });
    },
});

export const { addOrder, removeOrder, updateOrder } = newsSlice.actions;
export default newsSlice.reducer;
