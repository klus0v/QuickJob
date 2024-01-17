import { LoginAuth, RegisAuth } from '../constants/types';
import instance from './instance';

const login = async (data: LoginAuth) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    const response = await instance.post(`auth/login`, formData);

    return response.data;
};

const registration = async (data: RegisAuth) => {
    const response = await instance.post(`registration/request`, data);
    console.log(response);
    return response.data;
};

const AuthService = {
    login,
    registration,
};

export default AuthService;
