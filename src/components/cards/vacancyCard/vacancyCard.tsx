import { FaRegClock, FaRegUser } from 'react-icons/fa6';
import styles from './vacancyCard.module.css';
import { CgCreditCard } from 'react-icons/cg';
import { FoundItemOrder } from '../../../constants/types';
import { PaymentType } from '../../../constants/enums';

const VacancyCard = (props: FoundItemOrder) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardMain}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardTitle}>{props.title}</div>
                        <div className={styles.cardDescription}>
                            {props.description}
                        </div>
                        <div className={styles.cardIcons}>
                            <div className={styles.icon}>
                                <FaRegClock />
                                {props.workHours} ч
                            </div>
                            <div className={styles.icon}>
                                <FaRegUser />
                                {props.approvedResponsesCount} / {props.limit}
                                чел
                            </div>
                            <div className={styles.icon}>
                                <CgCreditCard />
                                {props.paymentType == PaymentType.Card
                                    ? 'переводом'
                                    : 'на карту'}
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardPrice}>
                        {props.price} руб/час
                    </div>
                </div>
                <button className={styles.cardButton}>Откликнуться</button>
            </div>
        </>
    );
};

export default VacancyCard;
