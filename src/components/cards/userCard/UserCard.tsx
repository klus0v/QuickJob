import { useState } from 'react';
import { UserResponse } from '../../../constants/types';
import { useAppDispatch } from '../../../shared/hooks';
import { orderResponseForUserThunk } from '../../../store/slices/orders.slice';
import styles from './usercard.module.css';

const UserCard = (user: UserResponse) => {
    const dispatch = useAppDispatch();
    const [isApprove, setIsApprove] = useState(user.status === 'Approved');
    const getUser = () => {
        console.log('Get user', user.userFio);
        dispatch(
            orderResponseForUserThunk({
                orderId: user.orderId,
                responseId: user.id,
                isApprove: !isApprove,
            }),
        );
        setIsApprove(!isApprove);
    };

    return (
        <div className={styles.employerAvatarName}>
            <div className={styles.employerAvatar} />
            <div className={styles.employerNameStar}>
                <div className={styles.employerName}>{user.userFio}</div>
                <div className={styles.stars} onClick={getUser}>
                    {isApprove ? 'Отклонить' : 'Принять'}
                </div>
            </div>
        </div>
    );
};

export default UserCard;
