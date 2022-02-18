import React, { FC } from 'react';

import CardGood from '../CardGood';
import styles from './orders.module.scss';
import { IOrders, ISales } from '../../types/types';

interface OrdersProps {
    wbOrders: Array<IOrders>;
    wbSales: Array<ISales>;
}

const Orders: FC<OrdersProps> = ({ wbOrders, wbSales }) => {
    console.log('wbOrders | ', wbOrders);
    console.log('wbSales | ', wbSales);

    const currentSales = wbSales.map((elem) => elem.gNumber);

    return (
        <div className={styles.orders}>
            <h3 className={styles.title}>Заказы: </h3>
            <div className={styles.list}>
                {wbOrders.map((order, index) => (
                    <CardGood
                        key={order.gNumber.toString() + index}
                        isSales={currentSales.includes(order.gNumber)}
                        brand={order.brand}
                        category={order.category}
                        oblast={order.oblast}
                        subject={order.subject}
                        supplierArticle={order.supplierArticle}
                        gNumber={order.gNumber}
                        date={order.date.split('T')[0]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Orders;
