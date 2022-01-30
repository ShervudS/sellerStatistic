import React, { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectApp } from '../../redux/appReducer';

import styles from './WbStatistic.module.scss';
import Orders from '../Orders/Orders';
import Sales from '../Sales/Sales';

interface WbStatisticProps {}

const WbStatistic: FC<WbStatisticProps> = ({}) => {
    const state = useAppSelector(selectApp);
    const { wbOrders, wbSales } = state;

    return (
        <div className={styles.statistic}>
            <Orders wbOrders={wbOrders} />
            <Sales wbSales={wbSales} />
        </div>
    );
};

export default WbStatistic;
