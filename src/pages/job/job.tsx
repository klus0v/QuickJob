import styles from './job.module.css';
import '@fontsource-variable/montserrat';
import Layout from '../../components/layout/layout';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Responses from './rightCard/responses';
import Contacts from './rightCard/contacts';
import { formatDateTime } from '../../shared/regex';
import { PaymentType } from '../../constants/enums';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { getOrderItemThunk } from '../../store/slices/orders.slice';

function Job() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // if (!isAuth) navigate('/');
        id && dispatch(getOrderItemThunk(id));
    }, []);

    const orderItem = useAppSelector(state => state.orders.item);
    const isCurrentUserCustomer = orderItem?.currentUserIsCustomer;

    const startDateTime = orderItem && formatDateTime(orderItem.startDateTime);
    const endDateTime = orderItem && formatDateTime(orderItem.endDateTime);

    const renderResponseType = isCurrentUserCustomer ? (
        <Responses responses={orderItem.responses} />
    ) : (
        <Contacts />
    );

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
                {orderItem && (
                    <div className={styles.mainCard}>
                        <div className={styles.leftCard}>
                            <div className={styles.titleCard}>
                                {orderItem?.title}
                            </div>
                            <div className={styles.price}>
                                {orderItem?.price} руб/час
                            </div>
                            <div className={styles.description}>
                                <div className={styles.heading}>Описание</div>
                                <div>{orderItem?.description}</div>
                                <div className={styles.heading}>Дата</div>
                                <div>
                                    с{startDateTime}
                                    по
                                    {endDateTime}
                                </div>
                                <div className={styles.heading}>Занятость</div>
                                <div>~{orderItem?.workHours} ч</div>
                                <div className={styles.heading}>Работников</div>
                                <div>
                                    {orderItem?.approvedResponsesCount}/
                                    {orderItem?.limit} чел
                                </div>
                                <div className={styles.heading}>Оплата</div>
                                <div>
                                    {orderItem?.paymentType == PaymentType.Card
                                        ? 'безналичными'
                                        : 'наличными'}
                                </div>
                                {/* <div className={styles.heading}>Навыки</div>
                                <div>
                                    {orderItem && orderItem.skills
                                        ? orderItem.skills.join(', ')
                                        : 'No skills available'}
                                </div> */}
                                <div className={styles.heading}>Адрес</div>
                                <div>{orderItem?.address}</div>
                            </div>
                            <div className={styles.date}>
                                {orderItem && orderItem.editDateTime === null
                                    ? formatDateTime(orderItem.createDateTime)
                                    : 'изм. ' +
                                      formatDateTime(
                                          orderItem?.editDateTime || '',
                                      )}
                            </div>
                        </div>
                        {renderResponseType}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Job;
