import styles from './history.module.css';
import '@fontsource-variable/montserrat';
import Layout from '../../components/layout/layout';
import { Link } from 'react-router-dom';
import VacancyCard from '../../components/cards/vacancyCard/vacancyCard';
import { useState } from 'react';
import cn from 'classnames';

function History() {
    const [flag, setFlag] = useState(true);

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
        </div>
    );
}

export default History;
