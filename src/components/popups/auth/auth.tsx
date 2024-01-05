import { PopupProps } from '../../../constants/types';
import { useOutsideClick } from '../../../shared/hooks';
import Popup from '../popup/popup';
import styles from './auth.module.css';
import Login from './login';
import cn from 'classnames';
import { useState } from 'react';
import Registration from './registration';

const AuthPopup: React.FC<PopupProps> = ({ isOpen, setIsOpen }) => {
    const refShowPopup = useOutsideClick(() => setIsOpen(false));
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Popup isOpened={isOpen}>
            <div ref={refShowPopup} className={styles.popup}>
                <div className={styles.links}>
                    <div
                        className={cn(
                            styles.link,
                            isLogin && styles.activeLink,
                        )}
                        onClick={() => setIsLogin(true)}
                    >
                        Вход
                    </div>
                    <div
                        className={cn(
                            styles.link,
                            !isLogin && styles.activeLink,
                        )}
                        onClick={() => setIsLogin(false)}
                    >
                        Регистрация
                    </div>
                </div>
                {isLogin ? <Login /> : <Registration />}
            </div>
        </Popup>
    );
};

export default AuthPopup;
