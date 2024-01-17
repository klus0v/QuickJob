import { TbLogin2, TbSearch } from 'react-icons/tb';
import styles from './layout.module.css';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import AuthPopup from '../popups/auth/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../shared/hooks';

const Layout = () => {
    const [isOpenAuthPOpup, setOpenAuthPOpup] = useState(false);
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const navigate = useNavigate();

    const a = (link: string) => {
        navigate(link);
    };

    return (
        <>
            <div className={styles.header}>
                <Link to="/" className={styles.logo}>
                    Quick<span>Job</span>
                </Link>

                <div className={styles.headerLinks}>
                    <div className={styles.links}>
                        <Link className={styles.link} to="/job/create">
                            Создать заказ
                        </Link>
                        <Link className={styles.link} to="/">
                            Найти задание
                        </Link>
                        <Link className={styles.link} to="/history">
                            Мои заказы
                        </Link>
                    </div>

                    <div className={styles.icons}>
                        <div>
                            <TbSearch />
                        </div>
                        <div>
                            <IoNotificationsOutline />
                        </div>
                        <div onClick={() => setOpenAuthPOpup(!isOpenAuthPOpup)}>
                            <TbLogin2 style={{ marginLeft: '-4px' }} />
                        </div>
                    </div>
                </div>
            </div>

            <AuthPopup isOpen={isOpenAuthPOpup} setIsOpen={setOpenAuthPOpup} />
        </>
    );
};

export default Layout;
