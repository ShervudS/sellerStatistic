import React, { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import axios from 'axios';

import Settings from '../ModalWindow/components/Settings/Settings';

import {
    setIsModalOpen,
    setWbOrders,
    setWbSales,
    selectApp,
} from '../../redux/appReducer';

import styles from './mainLayout.module.scss';
import IconSettings from '../../assets/images/icon/icon-settings.svg';

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    const state = useAppSelector(selectApp);
    const { isModalOpen } = state;

    useEffect(() => {
        getWbOrders('orders');
        getWbSales('sales');
    }, []);

    async function getWbOrders(url) {
        try {
            const res = await axios.get(
                `${process.env.MAIN_WB_URL}/${url}?dateFrom=2022-01-23T08:44:50.379&key=${process.env.WB_TOKEN}`
            );
            dispatch(setWbOrders(res.data));
            console.log('Orders |', res.data);
        } catch (e) {
            alert(e);
        }
    }

    async function getWbSales(url) {
        try {
            const res = await axios.get(
                `${process.env.MAIN_WB_URL}/${url}?dateFrom=2022-01-23T08:44:50.379&key=${process.env.WB_TOKEN}`
            );
            dispatch(setWbSales(res.data));
            console.log('Sales |', res.data);
        } catch (e) {
            alert(e);
        }
    }

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

            <div className={styles.container}>{children}</div>

            {isModalOpen && <Settings />}
        </>
    );
};

export default MainLayout;
