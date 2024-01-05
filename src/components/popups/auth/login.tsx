import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './auth.module.css';
import { LoginAuth } from '../../../constants/types';

const Login = () => {
    const { register, handleSubmit } = useForm<LoginAuth>();
    const onSubmit: SubmitHandler<LoginAuth> = data => console.log(data);

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
