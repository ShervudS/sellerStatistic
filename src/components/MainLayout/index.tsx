import React, { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import axios from 'axios';

import Settings from '../ModalWindow/components/Settings';

import {
    setIsModalOpen,
    setWbOrders,
    setWbSales,
    selectApp,
} from '../../redux/appReducer';

import styles from './mainLayout.module.scss';
import IconSettings from '../../assets/images/icon/icon-settings.svg';
import { getWbData } from '../../api/WbAPI';

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    const state = useAppSelector(selectApp);
    const { isModalOpen } = state;

    useEffect(() => {
        async function getWbOrders(url) {
            try {
                const res = await axios.get(
                    `${process.env.MAIN_WB_URL}/${url}?dateFrom=2022-02-10T08:44:50.379&key=${process.env.WB_TOKEN}`
                );
                dispatch(setWbOrders(res.data));
            } catch (e) {
                alert(e);
            }
        }

        async function getWbSales(url) {
            try {
                const res = await axios.get(
                    `${process.env.MAIN_WB_URL}/${url}?dateFrom=2022-02-10T08:44:50.379&key=${process.env.WB_TOKEN}`
                );
                dispatch(setWbSales(res.data));
            } catch (e) {
                alert(e);
            }
        }

        getWbOrders('orders');
        getWbSales('sales');
        // const res = getWbData('orders');
    }, []);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.containerHeader}>
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

            <div className={styles.container}>{children}</div>

            {isModalOpen && <Settings />}
        </>
    );
};

export default MainLayout;
