import styles from './job.module.css';
import '@fontsource-variable/montserrat';
import Layout from '../../components/layout/layout';
import { Link } from 'react-router-dom';
import Responses from './rightCard/responses';
import Contacts from './rightCard/contacts';

function Job() {
    return (
        <div className={styles.container}>
            <Layout />

            <div className={styles.intro}>
                <div className={styles.introMain}></div>
            </div>

            <div className={styles.main}>
                <Link to="/" className={styles.backPageLink}>
                    &lt; Назад к списку
                </Link>
                <div className={styles.mainCard}>
                    <div className={styles.leftCard}>
                        <div className={styles.titleCard}>
                            Фотосъемка мероприятия Хоровод УрФУ
                        </div>
                        <div className={styles.price}>250 руб/час</div>
                        <div className={styles.description}>
                            <div className={styles.heading}>Описание</div>
                            <div>
                                Фотограф в команду. Съемки мероприятия. <br />
                                фотографии высокого качества; <br />
                                творческая работа с портретными фото; <br />
                                наличие своего оборудования.
                            </div>
                            <div className={styles.heading}>Дата</div>
                            <div>с 28 по 30 ноября 2023 г.</div>
                            <div className={styles.heading}>Занятость</div>
                            <div>~4 часа</div>
                            <div className={styles.heading}>Работников</div>
                            <div>4 человека</div>
                            <div className={styles.heading}>Оплата</div>
                            <div>по факту(наличными)</div>
                            <div className={styles.heading}>Навыки</div>
                            <div>Наверное какие-то суперкрутые навыки</div>
                        </div>
                    </div>
                    <>
                        {/* <Contacts /> */}
                        <Responses />
                    </>
                </div>
            </div>
        </div>
    );
}

export default Job;
