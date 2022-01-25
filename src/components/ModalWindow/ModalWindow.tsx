import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { setIsModalOpen, selectApp } from '../../redux/appReducer';

import styles from './ModalWindow.module.scss';

interface ModalWindowProps {
    title: string;
    children?: React.ReactChildren | React.ReactNode;
}

const ModalWindow = ({ children, title }: ModalWindowProps) => {
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
