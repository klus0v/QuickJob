import UserCard from '../../../components/cards/userCard/UserCard';
import styles from '../job.module.css';

const Responses = () => {
    return (
        <div className={styles.rightCard}>
            <div className={styles.employerCard}>
                <h1>Отклики</h1>
                <UserCard name="Ангелина Аверина" />
                <UserCard name="Ангелина Аверина" />
                <UserCard name="Ангелина Аверина" />
                <UserCard name="Ангелина Аверина" />
                <UserCard name="Ангелина Аверина" />
                <UserCard name="Ангелина Аверина" />
                <UserCard name="Ангелина Аверина" />
                <UserCard name="Ангелина Аверина" />
                <UserCard name="Ангелина Аверина" />
                <UserCard name="Ангелина Аверина" />
            </div>
            <div className={styles.buttons}>
                <button className={styles.button}>Закрыть задание</button>
                <button className={styles.button}>Редактировать задание</button>
            </div>
        </div>
    );
};

export default Responses;
