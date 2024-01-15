import styles from './usercard.module.css';

const UserCard = ({ name }: { name: string }) => {
    const getUser = () => console.log('Get user', name);

    return (
        <div className={styles.employerAvatarName}>
            <div className={styles.employerAvatar} />
            <div className={styles.employerNameStar}>
                <div className={styles.employerName}>{name}</div>
                <div className={styles.stars} onClick={getUser}>
                    Принять
                </div>
            </div>
        </div>
    );
};

export default UserCard;
