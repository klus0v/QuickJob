import { TbLogin2, TbSearch } from 'react-icons/tb';
import styles from './layout.module.css';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useOutsideClick } from '../../shared/hooks';
import Login from '../popups/auth/login';
import AuthPopup from '../popups/auth/auth';

const Layout = () => {
    const [isOpenAuthPOpup, setOpenAuthPOpup] = useState(false);
    const refShowAuthPopup = useOutsideClick(() => setOpenAuthPOpup(false));

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    Quick<span>Job</span>
                </div>

                <div className={styles.headerLinks}>
                    <div className={styles.links}>
                        <a className={styles.link} href="#">
                            Создать заказ
                        </a>
                        <a className={styles.link} href="#">
                            Найти задание
                        </a>
                        <a className={styles.link} href="#">
                            Мои заказы
                        </a>
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
