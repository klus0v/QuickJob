import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './auth.module.css';
import { RegisAuth } from '../../../constants/types';

const Registration = () => {
    const { register, handleSubmit } = useForm<RegisAuth>();
    const onSubmit: SubmitHandler<RegisAuth> = data => console.log(data);

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
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default Registration;
