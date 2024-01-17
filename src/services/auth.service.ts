import { AuthState } from '../constants/types';
import instance from './instance';

const registration = async (data: AuthState) => {
    const response = await instance.post(`registration/request`, data);
    console.log(response);
    return response.data;
};

const AuthService = {
    registration,
};

export default AuthService;
