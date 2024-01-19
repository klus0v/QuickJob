import { useEffect } from 'react';
import UserCard from '../../../components/cards/userCard/UserCard';
import { UserResponse } from '../../../constants/types';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks';
import styles from '../job.module.css';
import { deleteOrderItemThunk } from '../../../store/slices/orders.slice';
import { useNavigate } from 'react-router-dom';

const Responses = ({ responses }: { responses: UserResponse[] }) => {
    const orderItem = useAppSelector(state => state.orders.item);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const deleteOrder = () => {
        orderItem && dispatch(deleteOrderItemThunk(orderItem.id));
        navigate(-1);
    };

    return (
        <div className={styles.rightCard}>
            <div className={styles.employerCard}>
                <span>Отклики</span>
                {responses &&
                    responses.map(user => <UserCard key={user.id} {...user} />)}
            </div>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={deleteOrder}>
                    Удалить задание
                </button>
                <button className={styles.button}>Редактировать задание</button>
            </div>
        </div>
    );
};

export default Responses;
