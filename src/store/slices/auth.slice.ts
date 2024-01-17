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
export const authLoginThunk = createAsyncThunk(
    'auth/login',
    async function (data: AuthState, { rejectWithValue }) {
        try {
            return await AuthService.login(data);
        } catch (error: any) {
            const message = error.response.data.Message;
            return rejectWithValue(message);
        }
    },
);
export const authRegistrationThunk = createAsyncThunk(
    'auth/registration',
    async function (data: AuthState, { rejectWithValue }) {
        try {
            return await AuthService.registration(data);
        } catch {
            return rejectWithValue('Server Error!');
        }
    },
);

export const refreshAccessToken = createAsyncThunk(
    'auth/refreshAccessToken',
    async (token: string) => {
        return await AuthService.refreshToken(token);
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
        builder
            .addCase(authLoginThunk.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.isAuth = true;
                localStorage.setItem('accessToken', action.payload.accessToken);
                localStorage.setItem(
                    'refreshToken',
                    action.payload.refreshToken,
                );
            })
            .addCase(authLoginThunk.rejected, (state, action) => {
                if (typeof action.payload === 'string')
                    state.error = action.payload;
            })
            .addCase(authRegistrationThunk.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.isAuth = true;
                localStorage.setItem('accessToken', action.payload.accessToken);
                localStorage.setItem(
                    'refreshToken',
                    action.payload.refreshToken,
                );
            })
            .addCase(refreshAccessToken.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                localStorage.setItem('accessToken', action.payload.accessToken);
            });
    },
});

export const { incrementByAmount } = authSlice.actions;
export default authSlice.reducer;
