import styles from './history.module.css';
import '@fontsource-variable/montserrat';
import Layout from '../../components/layout/layout';
import VacancyCard from '../../components/cards/vacancyCard/vacancyCard';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import AuthPopup from '../../components/popups/auth/auth';
import { getHistoryOrdersThunk } from '../../store/slices/history.slice';

function History() {
    const [isCustomer, setCustomer] = useState(true);

    const isAuth = useAppSelector(state => state.auth.isAuth);
    const [isOpenAuthPOpup, setOpenAuthPOpup] = useState(!isAuth);

    const dispatch = useAppDispatch();

    useEffect(() => {
        isAuth &&
            dispatch(getHistoryOrdersThunk(isCustomer ? 'Customer' : 'Worker'));
    }, [isCustomer, isAuth]);

    const historyOrders = useAppSelector(state => state.history.foundItems);

    return (
        <div className={styles.container}>
            <Layout />

            <div className={styles.intro}>
                <div className={styles.introMain}></div>
            </div>

            <div className={styles.main}>
                <nav className={styles.links}>
                    <div
                        className={cn(
                            styles.backPageLink,
                            isCustomer && styles.active,
                        )}
                        onClick={() => setCustomer(true)}
                    >
                        Я заказчик
                    </div>
                    <div
                        className={cn(
                            styles.backPageLink,
                            !isCustomer && styles.active,
                        )}
                        onClick={() => setCustomer(false)}
                    >
                        Я исполнитель
                    </div>
                </nav>

                <div className={styles.mainCard}>
                    {isAuth &&
                        historyOrders.map(order => (
                            <VacancyCard {...order} key={order.id} />
                        ))}
                </div>
            </div>
            <AuthPopup isOpen={isOpenAuthPOpup} setIsOpen={setOpenAuthPOpup} />
        </div>
    );
}

export default History;
