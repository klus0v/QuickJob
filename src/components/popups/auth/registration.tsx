import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './auth.module.css';
import { RegisAuth } from '../../../constants/types';

const Registration = () => {
    const { register, handleSubmit } = useForm<RegisAuth>();
    const onSubmit: SubmitHandler<RegisAuth> = data => console.log(data);

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <input
                type="lastName"
                {...register('lastName', { required: true, maxLength: 20 })}
                placeholder="Фамилия"
            />
            <input
                type="firstName"
                {...register('firstName', { required: true, maxLength: 20 })}
                placeholder="Имя"
            />
            <input type="date" {...register('age')} />
            <input type="tel" {...register('phone')} placeholder="Телефон" />
            <input type="email" {...register('email')} placeholder="Почта" />
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
