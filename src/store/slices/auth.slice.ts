import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import { AuthState } from '../../constants/types';

const AUTH_STATE: AuthState = {
    email: '',
    token: '',
    accessToken: '',
    refreshToken: '',
    isAuth: false,
    error: '',
};
export const registrationThunk = createAsyncThunk(
    'auth/registration',
    async function (data: AuthState, { rejectWithValue }) {
        try {
            return await AuthService.registration(data);
        } catch {
            return rejectWithValue('Server Error!');
        }
    },
);

const authSlice = createSlice({
    name: 'auth',
    initialState: AUTH_STATE,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<AuthState>) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
    },
    extraReducers: builder => {
        builder.addCase(registrationThunk.fulfilled, (state, action) => {
            // state.accessToken = action.payload.accessToken;
            // state.refreshToken = action.payload.refreshToken;
            // state.isAuth = true;
            // localStorage.setItem('accessToken', action.payload.accessToken);
            // localStorage.setItem('refreshToken', action.payload.refreshToken);
        });
    },
});

export const { incrementByAmount } = authSlice.actions;
export default authSlice.reducer;
