import styles from './job.module.css';
import '@fontsource-variable/montserrat';
import Layout from '../../components/layout/layout';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Responses from './rightCard/responses';
import Contacts from './rightCard/contacts';
import { FoundItemOrder } from '../../constants/types';
import { formatDateTime } from '../../shared/regex';
import { PaymentType } from '../../constants/enums';

function Job() {
    const { id } = useParams();
    const navigate = useNavigate();

    const location = useLocation();
    const { state } = location as { state: FoundItemOrder };

    const startDateTime = formatDateTime(state.startDateTime);
    const endDateTime = formatDateTime(state.endDateTime);

    return (
        <div className={styles.container}>
            <Layout />

            <div className={styles.intro}>
                <div className={styles.introMain}></div>
            </div>

            <div className={styles.main}>
                <div
                    onClick={() => navigate(-1)}
                    className={styles.backPageLink}
                >
                    &lt; Назад к списку
                </div>
                <div className={styles.mainCard}>
                    <div className={styles.leftCard}>
                        <div className={styles.titleCard}>{state.title}</div>
                        <div className={styles.price}>
                            {state.price} руб/час
                        </div>
                        <div className={styles.description}>
                            <div className={styles.heading}>Описание</div>
                            <div>{state.description}</div>
                            <div className={styles.heading}>Дата</div>
                            <div>
                                с {startDateTime} по {endDateTime}
                            </div>
                            <div className={styles.heading}>Занятость</div>
                            <div>~{state.workHours} ч</div>
                            <div className={styles.heading}>Работников</div>
                            <div>
                                {state.approvedResponsesCount}/{state.limit} чел
                            </div>
                            <div className={styles.heading}>Оплата</div>
                            <div>
                                {state.paymentType == PaymentType.Card
                                    ? 'безналичными'
                                    : 'наличными'}
                            </div>
                            <div className={styles.heading}>Навыки</div>
                            <div>{state.skills.join(', ')}</div>
                            <div className={styles.heading}>Адрес</div>
                            <div>{state.address}</div>
                        </div>
                        <div className={styles.date}>
                            {state.editDateTime === null
                                ? formatDateTime(state.createDateTime)
                                : 'изм. ' + formatDateTime(state.editDateTime)}
                        </div>
                    </div>
                    <>
                        {state.currentUserIsCustomer ? (
                            <Responses />
                        ) : (
                            <Contacts />
                        )}
                    </>
                </div>
            </div>
        </div>
    );
}

export default Job;
