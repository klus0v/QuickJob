import { FiPhone } from 'react-icons/fi';
import styles from '../job.module.css';
import { LuMail } from 'react-icons/lu';
import { LiaTelegram } from 'react-icons/lia';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthPopup from '../../../components/popups/auth/auth';
import {
    deleteOrderResponseFromUserThunk,
    getOrderItemThunk,
    getUserThunk,
    orderResponseFromUserThunk,
} from '../../../store/slices/orders.slice';

const Contacts = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isAuth = useAppSelector(state => state.auth.isAuth);
    const customerInfo = useAppSelector(
        state => state.orders.item?.customerInfo,
    );
    const orderItem = useAppSelector(state => state.orders.item);
    const [isOpenAuthPOpup, setOpenAuthPOpup] = useState(false);
    const [isApproved, setIsApproved] = useState(
        orderItem?.responseStatus === 'Approved',
    );

    useEffect(() => {
        orderItem?.customerId !== undefined &&
            dispatch(getUserThunk(orderItem.customerId));
    }, [orderItem?.customerId]);

    const dispatchResponse = () => {
        if (isAuth && !isApproved) {
            orderItem && dispatch(orderResponseFromUserThunk(orderItem.id));
            setIsApproved(true);
        } else if (isAuth && isApproved) {
            orderItem &&
                dispatch(deleteOrderResponseFromUserThunk(orderItem.id));
            id && dispatch(getOrderItemThunk(id));
            setIsApproved(false);
        } else {
            setOpenAuthPOpup(true);
        }
    };

    console.log(orderItem?.responseStatus);

    return (
        <div className={styles.rightCard}>
            <div className={styles.employerCard}>
                <div className={styles.employerAvatarName}>
                    <div className={styles.employerAvatar} />
                    <div className={styles.employerName}>
                        {customerInfo?.fio}
                    </div>
                </div>
                <div className={styles.employerContacts}>
                    {customerInfo?.phone && (
                        <>
                            <div className={styles.contactIcon}>
                                <FiPhone />
                            </div>
                            <div>{customerInfo.phone}</div>
                        </>
                    )}
                    {customerInfo?.email && (
                        <>
                            <div className={styles.contactIcon}>
                                <LuMail />
                            </div>
                            <div>{customerInfo.email}</div>
                        </>
                    )}
                    {customerInfo?.telegram?.tgUsername && (
                        <>
                            <div className={styles.contactIcon}>
                                <LiaTelegram />
                            </div>
                            <div>{customerInfo.telegram.tgUsername}</div>
                        </>
                    )}
                    {customerInfo?.address && (
                        <>
                            <div className={styles.contactIcon}>
                                <HiOutlineLocationMarker />
                            </div>
                            <div>{customerInfo.address}</div>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={dispatchResponse}>
                    {isApproved ? 'Отказаться' : 'Откликнуться'}
                </button>
                <button className={styles.button}>Связаться</button>
            </div>
            <AuthPopup isOpen={isOpenAuthPOpup} setIsOpen={setOpenAuthPOpup} />
        </div>
    );
};

export default Contacts;
