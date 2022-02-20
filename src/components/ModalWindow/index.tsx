import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { setIsModalOpen, selectApp } from '../../redux/redusers/appReducer';

import styles from './ModalWindow.module.scss';

interface ModalWindowProps {
    title: string;
}

const ModalWindow: FC<ModalWindowProps> = ({ children, title }) => {
    const dispatch = useAppDispatch();

    const state = useAppSelector(selectApp);
    const { isModalOpen } = state;

    return (
        <div className={styles.wrapper}>
            <div className={styles.window}>
                <h2 className={styles.title}>
                    {title}
                    <button
                        className={styles.closeBtn}
                        onClick={() => dispatch(setIsModalOpen(!isModalOpen))}
                    >
                        .
                    </button>
                </h2>

                <div className={styles.modalBody}>{children}</div>
            </div>
        </div>
    );
};

export default ModalWindow;
