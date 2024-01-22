import { LoginAuth, RegisAuth } from '../constants/types';
import $api from './instance';

const login = async (data: LoginAuth) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    const response = await $api.post(`/api/auth/login`, formData);

    return response.data;
};

const registration = async (data: RegisAuth) => {
    const responseReg = await $api.post(`/api/registration/request`, data);
    const responseConf = await $api.post(`/api/registration/confirm`, {
        userFormId: responseReg.data.userFormId,
        code: '0000',
    });
    return responseConf.data;
};
const logout = async () => {
    const response = await $api.post(`/api/auth/logout`);

    return response.data;
};

const getUser = async (id: string) => {
    const response = await $api.get(`/cabinet-api/UserInfo/base?userId=${id}`);
    return response.data;
};

const AuthService = {
    login,
    registration,
    getUser,
    logout,
};

export default AuthService;
