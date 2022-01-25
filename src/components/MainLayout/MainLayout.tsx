import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import Settings from '../ModalWindow/components/Settings/Settings';

import { setIsModalOpen, selectApp } from '../../redux/appReducer';

import styles from './mainLayout.module.scss';
import IconSettings from '../../assets/images/icon/icon-settings.svg';

interface MainLayoutProps {
    children?: React.ReactChildren | React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const dispatch = useAppDispatch();

    const state = useAppSelector(selectApp);
    const { isModalOpen } = state;

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>Seller Statistic</div>

                    <div className={styles.statistic}>
                        статус: обновлено | не обновлено
                    </div>

                    <div className={styles.control}>
                        <button
                            className={styles.buttonSettings}
                            onClick={() =>
                                dispatch(setIsModalOpen(!isModalOpen))
                            }
                        >
                            <IconSettings />
                        </button>
                    </div>
                </div>
            </header>
            {children}

            {isModalOpen && <Settings />}
        </>
    );
};

export default MainLayout;
