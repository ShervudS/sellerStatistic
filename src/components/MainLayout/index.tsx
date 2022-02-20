import React, { FC, useEffect } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import Settings from '../ModalWindow/components/Settings';
import Aside from './components/Aside';

import {
    setIsModalOpen,
    setWbOrders,
    setWbSales,
    selectApp,
} from '../../redux/redusers/appReducer';

import styles from './mainLayout.module.scss';
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
        <div className={styles.mainLayout}>
            <Aside />

            <div className={styles.mainContent}>{children}</div>

            {isModalOpen && <Settings />}
        </div>
    );
};

export default MainLayout;
