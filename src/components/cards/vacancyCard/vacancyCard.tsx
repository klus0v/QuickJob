import { FaRegClock, FaRegUser } from 'react-icons/fa6';
import styles from './vacancyCard.module.css';
import { CgCreditCard } from 'react-icons/cg';

const VacancyCard = () => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardMain}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardTitle}>
                            Видеосъемка мероприятия Хоровод УрФУ
                        </div>
                        <div className={styles.cardDescription}>
                            Фотограф в команду. Съемки мероприятия. Надо делать
                            фотографии высокого качества, творческая работа с
                            портретными фото, в отличие от того, как обычно
                            фотографируют выпускные.
                        </div>
                        <div className={styles.cardIcons}>
                            <div className={styles.icon}>
                                <FaRegClock />4 часа
                            </div>
                            <div className={styles.icon}>
                                <FaRegUser />3 человека
                            </div>
                            <div className={styles.icon}>
                                <CgCreditCard />
                                по факту
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardPrice}>250 руб/час</div>
                </div>
                <button className={styles.cardButton}>Откликнуться</button>
            </div>
        </>
    );
};

export default VacancyCard;
