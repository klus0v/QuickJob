import styles from './App.module.css';
import '@fontsource-variable/montserrat';
import Layout from './components/layout/layout';
import VacancyCard from './components/cards/vacancyCard/vacancyCard';
import SortCard from './components/cards/sortMainCard/sortCard';
import { categories } from './data/categories.data';
import { ChangeEvent, useEffect, useState } from 'react';
import { getOrdersThunk } from './store/slices/orders.slice';
import { useAppDispatch, useAppSelector } from './shared/hooks';
import { setQuery } from './store/slices/search.slice';
import { ApiQueryParamsOrders } from './constants/types';
import { SubmitHandler, useForm } from 'react-hook-form';

function App() {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.orders);
    const query = useAppSelector(state => state.search.query);
    const { register, handleSubmit } = useForm<ApiQueryParamsOrders>();

    const onSubmit: SubmitHandler<ApiQueryParamsOrders> = (
        data: ApiQueryParamsOrders,
    ) => {
        data.query && dispatch(setQuery(data.query));
    };

    useEffect(() => {
        dispatch(getOrdersThunk());
    }, [query]);
    return (
        <div className={styles.container}>
            <Layout />

            <div className={styles.intro}>
                <div className={styles.introMain}>
                    <h2>Ищите подработку</h2>
                    <div className={styles.introText}>
                        какой-то супер важный мотивирующий текст, чтоб ты делал
                        что-то полезное
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.search}
                    >
                        <input
                            type="text"
                            placeholder="Поиск по ключевым словам"
                            {...register('query')}
                        />
                        <button type="submit">Найти</button>
                    </form>
                    <div className={styles.exampleSearchText}>
                        Например: <span>что-то там</span>
                    </div>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.mainCategories}>
                    <div className={styles.title}>Категории</div>
                    <div className={styles.categories}>
                        {categories.map((category, index) => (
                            <div key={index} className={styles.category}>
                                {category.icon}
                                <span>{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.recommendationsSorting}>
                    <div className={styles.recommendations}>
                        <div className={styles.title}>Рекомендации</div>
                        {orders.foundItems.map(order => (
                            <VacancyCard {...order} key={order.id} />
                        ))}
                    </div>
                    <div className={styles.sorting}>
                        <SortCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
