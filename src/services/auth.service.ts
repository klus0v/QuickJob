import { AuthState } from '../constants/types';
import instance from './instance';

const login = async (data: AuthState) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password || '');

    const response = await instance.post(`auth/login`, formData);

    return response.data;
};

const refreshToken = async (token: string) => {
    const formData = new FormData();
    formData.append('token', token);

    const response = await instance.post(`auth/token/refresh`, formData);
    return response.data;
};

const registration = async (data: AuthState) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password || '');

    const response = await instance.post(
        `auth/registration/${data.token}`,
        formData,
    );
    return response.data;
};

const AuthService = {
    login,
    registration,
    refreshToken,
};

export default AuthService;
