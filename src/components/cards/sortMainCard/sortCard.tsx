import React from 'react';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import styles from './sortCard.module.css';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks';
import { setSortField } from '../../../store/slices/search.slice';

const sorting: {
    name: string;
    value:
        | 'CreateDateTime'
        | 'EditDateTime'
        | 'WorkHours'
        | 'Limit'
        | 'ApprovedResponsesCount'
        | 'Price';
    defaultChecked: boolean;
    text: string;
}[] = [
    {
        name: 'fav_language',
        value: 'CreateDateTime',
        defaultChecked: true,
        text: 'По времени создания',
    },
    {
        name: 'fav_language',
        value: 'EditDateTime',
        defaultChecked: false,
        text: 'По времени редактирования',
    },
    {
        name: 'fav_language',
        value: 'WorkHours',
        defaultChecked: false,
        text: 'По рабочим часам',
    },
    {
        name: 'fav_language',
        value: 'Limit',
        defaultChecked: false,
        text: 'По лимиту',
    },
    {
        name: 'fav_language',
        value: 'ApprovedResponsesCount',
        defaultChecked: false,
        text: 'По количеству одобренных ответов',
    },
    {
        name: 'fav_language',
        value: 'Price',
        defaultChecked: false,
        text: 'По цене',
    },
];

const SortCard = () => {
    const sortField = useAppSelector(state => state.search.sortField);
    const dispatch = useAppDispatch();

    const handleSortChange = event => {
        const selectedSortField = event.target.value as
            | 'CreateDateTime'
            | 'EditDateTime'
            | 'WorkHours'
            | 'Limit'
            | 'ApprovedResponsesCount'
            | 'Price';
        dispatch(setSortField(selectedSortField));
    };

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
                            checked={sortField === sort.value}
                            onChange={handleSortChange}
                        />
                        <label htmlFor={sort.value}>{sort.text}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortCard;
