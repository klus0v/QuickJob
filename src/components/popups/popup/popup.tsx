import React, { FC } from 'react';
import Portal from './portal';
import styles from './popup.module.css';

const Popup: FC<{ children: React.ReactNode; isOpened: boolean }> = ({
    children,
    isOpened,
}) => {
    if (!isOpened) return null;

    return (
        <Portal>
            <div className={styles.popup} role="dialog">
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    );
};

export default Popup;
