import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import { AuthState, LoginAuth, RegisAuth } from '../../constants/types';

const AUTH_STATE: AuthState = {
    email: '',
    token: '',
    accessToken: '',
    refreshToken: '',
    isAuth: false,
    error: '',
};
export const loginThunk = createAsyncThunk(
    'auth/login',
    async function (data: LoginAuth, { rejectWithValue }) {
        try {
            return await AuthService.login(data);
        } catch {
            return rejectWithValue('Server Error!');
        }
    },
);
export const registrationThunk = createAsyncThunk(
    'auth/registration',
    async function (data: RegisAuth, { rejectWithValue }) {
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
        builder

            .addCase(loginThunk.fulfilled, (state, action) => {
                // state.accessToken = action.payload.accessToken;
                // state.refreshToken = action.payload.refreshToken;
                // state.isAuth = true;
                // localStorage.setItem('accessToken', action.payload.accessToken);
                // localStorage.setItem(
                //     'refreshToken',
                //     action.payload.refreshToken,
                // );
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.isAuth = true;
            })

            .addCase(registrationThunk.fulfilled, (state, action) => {
                // state.accessToken = action.payload.accessToken;
                // state.refreshToken = action.payload.refreshToken;
                // state.isAuth = true;
                // localStorage.setItem('accessToken', action.payload.accessToken);
                // localStorage.setItem('refreshToken', action.payload.refreshToken);
            })
            .addCase(registrationThunk.rejected, (state, action) => {
                state.isAuth = true;
            });
    },
});

export const { incrementByAmount } = authSlice.actions;
export default authSlice.reducer;
