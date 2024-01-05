import { FaStar } from 'react-icons/fa6';
import Layout from '../../components/layout/layout';
import styles from './profile.module.css';
import { FiPhone } from 'react-icons/fi';
import { LuMail } from 'react-icons/lu';
import { LiaTelegram } from 'react-icons/lia';
import { HiOutlineLocationMarker } from 'react-icons/hi';

function Profile() {
    return (
        <div className={styles.container}>
            <Layout />

            <div className={styles.intro}>
                <div className={styles.introMain}></div>
            </div>

            <div className={styles.main}>
                <div className={styles.leftCard}>
                    <div className={styles.employerCard}>
                        <div className={styles.employerAvatarName}>
                            <div className={styles.employerAvatar} />
                            <div className={styles.employerName}>
                                Ангелина Аверина
                            </div>
                        </div>
                        <div className={styles.employerContacts}>
                            <div className={styles.contactIcon}>
                                <FiPhone />
                            </div>
                            <div>+799966622148</div>
                            <div className={styles.contactIcon}>
                                <LuMail />
                            </div>
                            <div>angelinaver@yandex.ru</div>
                            <div className={styles.contactIcon}>
                                <LiaTelegram />
                            </div>
                            <div>@angrelAv</div>
                            {/* <div className={styles.contactIcon}>
                                <HiOutlineLocationMarker />
                            </div>
                            <div>
                                Екатеринбург, микрорайон Втузгородок, ул. Мира
                                19
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className={styles.rightCard}>
                    <div className={styles.info}>
                        <h2>Дополнительная информация</h2>
                        <div className={styles.tableInfo}>
                            <div>Дата рождения</div>
                            <div>09.11.2002</div>
                            <div>Институт</div>
                            <div>ИНЭУ</div>
                            <div>Курс обучения</div>
                            <div>4 курс</div>
                            <div>Гражданство</div>
                            <div>Россия</div>
                            <div>Предпочтения</div>
                            <div>Фотосъемка, Организация мероприятий</div>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <h2>Моя история</h2>
                        <div className={styles.historyList}>
                            <div>Фотосъемка мероприятия Хоровод УрФУ</div>
                            <div>Помощь на кафедре </div>
                            <div>Фотосъемка Новогоднего праздника</div>
                            <div>Фотосъемка Новогоднего праздника</div>
                            <div>Помощь на конференции</div>
                            <div>Помощь на конференции</div>
                            <div>Помощь на конференции</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
