import { UserResponse } from '../../../constants/types';
import styles from './usercard.module.css';

const UserCard = (user: UserResponse) => {
    const getUser = () => console.log('Get user', name);

    return (
        <div className={styles.employerAvatarName}>
            <div className={styles.employerAvatar} />
            <div className={styles.employerNameStar}>
                <div className={styles.employerName}>{user.userFio}</div>
                <div className={styles.stars} onClick={getUser}>
                    Принять
                </div>
            </div>
        </div>
    );
};

export default UserCard;
