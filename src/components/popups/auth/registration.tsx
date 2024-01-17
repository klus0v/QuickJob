import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './auth.module.css';
import { RegisAuth } from '../../../constants/types';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks';
import { registrationThunk } from '../../../store/slices/auth.slice';

const Registration = () => {
    const { register, handleSubmit } = useForm<RegisAuth>();
    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.auth.error);

    const onSubmit: SubmitHandler<RegisAuth> = data =>
        dispatch(registrationThunk(data));

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <input
                type="name"
                {...register('fio', { required: true })}
                placeholder="ФИО"
            />
            <input type="date" {...register('birthDate', { required: true })} />
            <input
                type="tel"
                {...register('phone', { required: true })}
                placeholder="Телефон"
            />
            <input
                type="email"
                {...register('email', { required: true })}
                placeholder="Почта"
            />
            <input
                type="password"
                {...register('password')}
                placeholder="Пароль"
            />
            {error && <span className={styles.error}>{error}</span>}
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default Registration;
