import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FrontObject } from '../../constants/types';
import HistoryService from '../../services/history.service';

const HISTORY_STATE: FrontObject = {
    foundItems: [],
    totalCount: 0,
};

export const getHistoryOrdersThunk = createAsyncThunk(
    'history/getHistoryOrders',
    async function (historyType: 'Worker' | 'Customer', { rejectWithValue }) {
        try {
            const response = await HistoryService.getHistoryOrders(historyType);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

const historySlice = createSlice({
    name: 'history',
    initialState: HISTORY_STATE,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getHistoryOrdersThunk.fulfilled, (state, action) => {
                state.foundItems = action.payload.foundItems;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(getHistoryOrdersThunk.pending, (state, action) => {
                state.foundItems = [];
                state.totalCount = 0;
            })
            .addCase(getHistoryOrdersThunk.rejected, (state, action) => {});
    },
});

export const {} = historySlice.actions;
export default historySlice.reducer;
