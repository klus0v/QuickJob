import UserCard from '../../../components/cards/userCard/UserCard';
import { UserResponse } from '../../../constants/types';
import styles from '../job.module.css';

const Responses = (props: UserResponse[]) => {
    return (
        <div className={styles.rightCard}>
            <div className={styles.employerCard}>
                <span>Отклики</span>
                {/* {props.map(user => (
                    <UserCard key={user.id} {...user} />
                ))} */}
            </div>
            <div className={styles.buttons}>
                <button className={styles.button}>Закрыть задание</button>
                <button className={styles.button}>Редактировать задание</button>
            </div>
        </div>
    );
};

export default Responses;
