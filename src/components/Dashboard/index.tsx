import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import {
    setIsModalOpen,
    setIsDarkMode,
    selectApp,
} from '../../redux/redusers/appReducer';

import styles from './Dashboard.module.scss';
import IconSettings from '../../assets/images/icon/icon-settings.svg';
import IconLightMode from '../../assets/images/icon/icon-light-mode.svg';
import IconDarkMode from '../../assets/images/icon/icon-dark-mode.svg';

interface DashboardProps {}

const Index: FC<DashboardProps> = ({}) => {
    const dispatch = useAppDispatch();

    const state = useAppSelector(selectApp);
    const { isModalOpen, isDarkMode } = state;

    return (
        <div className={styles.dashboard}>
            <div className={styles.topItem}>
                <div className={styles.controls}>
                    <button className={styles.btn}>
                        <IconSettings />
                    </button>

                    <button
                        className={styles.btn}
                        onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
                    >
                        {isDarkMode ? <IconDarkMode /> : <IconLightMode />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
