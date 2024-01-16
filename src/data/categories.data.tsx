import {
    HiOutlineCamera,
    HiOutlineUserGroup,
    HiOutlineAcademicCap,
} from 'react-icons/hi';
import { LuTruck } from 'react-icons/lu';

export const categories: { icon: React.ReactNode; name: string }[] = [
    { icon: <HiOutlineCamera />, name: 'Фото/видеосъемка' },
    { icon: <HiOutlineUserGroup />, name: 'Мероприятия' },
    { icon: <HiOutlineAcademicCap />, name: 'Помощь с ДЗ' },
    { icon: <LuTruck />, name: 'Тех. бригада' },
];
