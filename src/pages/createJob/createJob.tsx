import { SubmitHandler, useForm } from 'react-hook-form';
import Layout from '../../components/layout/layout';
import styles from './createJob.module.css';
import { Job } from '../../constants/types';

function CreateJob() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Job>();
    const onSubmit: SubmitHandler<Job> = data => console.log(data);

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
                        <input
                            type="text"
                            placeholder="Название задания"
                            {...register('title', {
                                required: true,
                                maxLength: 30,
                            })}
                        />
                        <span className={styles.error}>
                            {errors.title?.message}
                        </span>

                        <label>Выберите категорию задания</label>
                        <input
                            type="text"
                            placeholder="Выберите категорию"
                            {...register('categories', {
                                required: true,
                            })}
                        />
                        <span className={styles.error}>
                            {errors.categories?.message}
                        </span>

                        <label>Укажите адрес</label>
                        <input
                            type="text"
                            placeholder="Город, улица, дом"
                            {...register('address', {
                                required: true,
                            })}
                        />
                        <span className={styles.error}>
                            {errors.address?.message}
                        </span>

                        <label>Укажите время начала выполнения задания</label>
                        <input
                            type="datetime-local"
                            placeholder="Город, улица, дом"
                            {...register('startDateTime', {
                                required: true,
                            })}
                        />
                        <span className={styles.error}>
                            {errors.startDateTime?.message}
                        </span>

                        <label>Укажите конечное выполнения задания</label>
                        <input
                            type="datetime-local"
                            placeholder="Город, улица, дом"
                            {...register('endDateTime', {
                                required: true,
                            })}
                        />
                        <span className={styles.error}>
                            {errors.endDateTime?.message}
                        </span>

                        <label>
                            Сколько человек требуется для выполнения задания
                        </label>
                        <input
                            type="number"
                            placeholder="Количество человек"
                            {...register('limit', {
                                required: true,
                            })}
                        />
                        <span className={styles.error}>
                            {errors.limit?.message}
                        </span>

                        <label>
                            Укажите примерное время выполнения в часах
                        </label>
                        <input
                            type="number"
                            placeholder="Примерное время выполнения"
                            {...register('workHours', {
                                required: true,
                            })}
                        />
                        <span className={styles.error}>
                            {errors.limit?.message}
                        </span>

                        <label>Укажите размер оплаты</label>
                        <input
                            type="number"
                            placeholder="Размер оплаты"
                            {...register('price', {
                                required: true,
                            })}
                        />
                        <span className={styles.error}>
                            {errors.price?.message}
                        </span>

                        <label>Укажите тип оплаты</label>
                        <input
                            type="text"
                            placeholder="Тип оплаты"
                            {...register('paymentType', {
                                required: true,
                            })}
                        />
                        <span className={styles.error}>
                            {errors.paymentType?.message}
                        </span>

                        <label> Уточните детали задания</label>
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
                        <input
                            type="text"
                            placeholder="Навыки"
                            {...register('skills', {
                                required: true,
                            })}
                        />
                        <span className={styles.error}>
                            {errors.skills?.message}
                        </span>
                        <button type="submit">Опубликовать</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateJob;
