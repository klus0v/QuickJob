import styles from './history.module.css';
import '@fontsource-variable/montserrat';
import Layout from '../../components/layout/layout';
import { Link } from 'react-router-dom';
import VacancyCard from '../../components/cards/vacancyCard/vacancyCard';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import AuthPopup from '../../components/popups/auth/auth';
import { getHistoryOrdersThunk } from '../../store/slices/history.slice';

function History() {
    const [flag, setFlag] = useState(true);

    const isAuth = useAppSelector(state => state.auth.isAuth);
    const [isOpenAuthPOpup, setOpenAuthPOpup] = useState(!isAuth);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getHistoryOrdersThunk(flag ? 'Customer' : 'Worker'));
    }, [flag]);

    return (
        <div className={styles.container}>
            <Layout />

            <div className={styles.intro}>
                <div className={styles.introMain}></div>
            </div>

            <div className={styles.main}>
                <nav className={styles.links}>
                    <Link
                        to="#"
                        className={cn(
                            styles.backPageLink,
                            flag && styles.active,
                        )}
                        onClick={() => setFlag(true)}
                    >
                        Я заказчик
                    </Link>
                    <Link
                        to="#"
                        className={cn(
                            styles.backPageLink,
                            !flag && styles.active,
                        )}
                        onClick={() => setFlag(false)}
                    >
                        Я исполнитель
                    </Link>
                </nav>

                <div className={styles.mainCard}>
                    <VacancyCard />
                    <VacancyCard />
                    <VacancyCard />
                    <VacancyCard />
                </div>
            </div>
            <AuthPopup isOpen={isOpenAuthPOpup} setIsOpen={setOpenAuthPOpup} />
        </div>
    );
}

export default History;
