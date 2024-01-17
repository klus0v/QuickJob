import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import { AuthState, LoginAuth, RegisAuth } from '../../constants/types';

const AUTH_STATE: AuthState = {
    email: '',
    isAuth: false,
    error: null,
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
        } catch (error: any) {
            if (error.response && error.response.data)
                return rejectWithValue({ error: error.response.data });
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
                state.isAuth = true;
                state.accessToken = action.payload.accessToken;
                localStorage.setItem('accessToken', action.payload.accessToken);
            })
            .addCase(loginThunk.rejected, (state, action) => {
                if (
                    action.payload &&
                    action.payload.error &&
                    action.payload.error.Message
                ) {
                    state.error = action.payload.error.Message;
                } else {
                    state.error = 'Unknown error occurred';
                }
            })

            .addCase(registrationThunk.fulfilled, (state, action) => {
                state.isAuth = true;
                state.accessToken = action.payload.accessToken;
                localStorage.setItem('accessToken', action.payload.accessToken);
                state.userFormId = action.payload.userFormId;
            })
            .addCase(registrationThunk.rejected, (state, action) => {
                if (
                    action.payload &&
                    action.payload.error &&
                    action.payload.error.Message
                ) {
                    state.error = action.payload.error.Message;
                } else {
                    state.error = 'Unknown error occurred';
                }
            });
    },
});

export const { incrementByAmount } = authSlice.actions;
export default authSlice.reducer;
