import { FiPhone } from 'react-icons/fi';
import styles from '../job.module.css';
import { LuMail } from 'react-icons/lu';
import { LiaTelegram } from 'react-icons/lia';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Contacts = () => {
    return (
        <div className={styles.rightCard}>
            <div className={styles.employerCard}>
                <div className={styles.employerAvatarName}>
                    <div className={styles.employerAvatar} />
                    <div className={styles.employerName}>Ангелина Аверина</div>
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
                    <div className={styles.contactIcon}>
                        <HiOutlineLocationMarker />
                    </div>
                    <div>Екатеринбург, микрорайон Втузгородок, ул. Мира 19</div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button}>Откликнуться</button>
                <button className={styles.button}>Связаться</button>
            </div>
        </div>
    );
};

export default Contacts;
