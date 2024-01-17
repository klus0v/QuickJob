import { SubmitHandler, useForm } from 'react-hook-form';
import Layout from '../../components/layout/layout';
import styles from './createJob.module.css';
import { Job } from '../../constants/types';
import { useState } from 'react';
import { useAppSelector } from '../../shared/hooks';
import AuthPopup from '../../components/popups/auth/auth';

function CreateJob() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Job>();
    const onSubmit: SubmitHandler<Job> = data => console.log(data);

    const isAuth = useAppSelector(state => state.auth.isAuth);
    const [isOpenAuthPOpup, setOpenAuthPOpup] = useState(!isAuth);

    return (
        <div className={styles.container}>
            <Layout />

            <div className={styles.intro} />

            <div className={styles.main}>
                <h2>Создание заказа</h2>

                <div className={styles.employerCard}>
                    <form
                        className={styles.wrapper}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label>Укажите название задания</label>
                        <span className={styles.error}>
                            {errors.title && 'Обязательное поле'}
                        </span>
                        <input
                            type="text"
                            placeholder="Название задания"
                            {...register('title', {
                                required: true,
                            })}
                        />

                        <label>Выберите категорию задания</label>
                        <span className={styles.error}>
                            {errors.categories && 'Обязательное поле'}
                        </span>
                        <input
                            type="text"
                            placeholder="Выберите категорию"
                            {...register('categories', {
                                required: true,
                            })}
                        />

                        <label>Укажите адрес</label>
                        <span className={styles.error}>
                            {errors.address && 'Обязательное поле'}
                        </span>
                        <input
                            type="text"
                            placeholder="Город, улица, дом"
                            {...register('address', {
                                required: true,
                            })}
                        />

                        <label>Укажите время начала выполнения задания</label>
                        <span className={styles.error}>
                            {errors.startDateTime && 'Обязательное поле'}
                        </span>
                        <input
                            type="datetime-local"
                            placeholder="Город, улица, дом"
                            {...register('startDateTime', {
                                required: true,
                            })}
                        />

                        <label>Укажите конечное выполнения задания</label>
                        <span className={styles.error}>
                            {errors.endDateTime && 'Обязательное поле'}
                        </span>
                        <input
                            type="datetime-local"
                            placeholder="Город, улица, дом"
                            {...register('endDateTime', {
                                required: true,
                            })}
                        />

                        <label>
                            Сколько человек требуется для выполнения задания
                        </label>
                        <span className={styles.error}>
                            {errors.limit && 'Обязательное поле'}
                        </span>
                        <input
                            type="number"
                            placeholder="Количество человек"
                            {...register('limit', {
                                required: true,
                            })}
                        />

                        <label>
                            Укажите примерное время выполнения в часах
                        </label>
                        <span className={styles.error}>
                            {errors.workHours && 'Обязательное поле'}
                        </span>
                        <input
                            type="number"
                            placeholder="Примерное время выполнения"
                            {...register('workHours', {
                                required: true,
                            })}
                        />

                        <label>Укажите размер оплаты</label>
                        <span className={styles.error}>
                            {errors.price && 'Обязательное поле'}
                        </span>
                        <input
                            type="number"
                            placeholder="Размер оплаты"
                            {...register('price', {
                                required: true,
                            })}
                        />

                        <label>Укажите тип оплаты</label>
                        <span className={styles.error}>
                            {errors.paymentType && 'Обязательное поле'}
                        </span>
                        <input
                            type="text"
                            placeholder="Тип оплаты"
                            {...register('paymentType', {
                                required: true,
                            })}
                        />

                        <label> Уточните детали задания</label>
                        <span className={styles.error}>
                            {errors.description && 'Обязательное поле'}
                        </span>
                        <textarea
                            {...register('description')}
                            placeholder="Подробное описание задания"
                            className={styles.input}
                        />

                        <label>Добавьте фото</label>
                        <input
                            type="file"
                            {...register('files')}
                            className={styles.input}
                        />

                        <label>
                            Перечислите через пробел необходимые навыки
                        </label>
                        <span className={styles.error}>
                            {errors.skills && 'Обязательное поле'}
                        </span>
                        <input
                            type="text"
                            placeholder="Навыки"
                            {...register('skills', {
                                required: true,
                            })}
                        />

                        <button type="submit">Опубликовать</button>
                    </form>
                </div>
            </div>
            <AuthPopup isOpen={isOpenAuthPOpup} setIsOpen={setOpenAuthPOpup} />
        </div>
    );
}

export default CreateJob;
