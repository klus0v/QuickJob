import { HiOutlineSwitchVertical } from 'react-icons/hi';
import styles from './sortCard.module.css';

const sorting: {
    name: string;
    value: string;
    defaultChecked: boolean;
    text: string;
}[] = [
    {
        name: 'fav_language',
        value: 'byUrgency',
        defaultChecked: true,
        text: 'По срочности',
    },
    {
        name: 'fav_language',
        value: 'byEmployment',
        defaultChecked: false,
        text: 'По занятости',
    },
    {
        name: 'fav_language',
        value: 'workday',
        defaultChecked: false,
        text: 'Будни',
    },
    {
        name: 'fav_language',
        value: 'weekend',
        defaultChecked: false,
        text: 'Выходные',
    },
];

const SortCard = () => {
    return (
        <div className={styles.sort}>
            <div className={styles.sortHeader}>
                Сортировать <HiOutlineSwitchVertical />
            </div>
            <div className={styles.radioButtons}>
                {sorting.map((sort, index) => (
                    <div key={index} className={styles.radioButton}>
                        <input
                            type="radio"
                            id={sort.value}
                            name={sort.name}
                            value={sort.value}
                            defaultChecked={sort.defaultChecked}
                        />
                        <label htmlFor={sort.value}>{sort.text}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortCard;
