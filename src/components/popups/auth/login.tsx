import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './auth.module.css';
import { LoginAuth } from '../../../constants/types';
import { useAppDispatch } from '../../../shared/hooks';
import { loginThunk } from '../../../store/slices/auth.slice';

const Login = () => {
    const { register, handleSubmit } = useForm<LoginAuth>();
    const dispatch = useAppDispatch();
    const onSubmit: SubmitHandler<LoginAuth> = data =>
        dispatch(loginThunk(data));

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email')} placeholder="Почта" />
            <input
                type="password"
                {...register('password')}
                placeholder="Пароль"
            />
            <div className={styles.forgotPassword}>Забыли пароль?</div>
            <button type="submit">Войти</button>
        </form>
    );
};

export default Login;
