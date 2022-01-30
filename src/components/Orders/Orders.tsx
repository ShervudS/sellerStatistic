import React, { FC } from 'react';

import { IOrders } from '../../types/types';
import styles from './orders.module.scss';
import CardGood from '../CardGood/CardGood';

interface OrdersProps {
    wbOrders: Array<IOrders>;
}

const Orders: FC<OrdersProps> = ({ wbOrders }) => {
    return (
        <div>
            <p>Orders</p>
            {wbOrders.map((order) => (
                <CardGood
                    brand={order.brand}
                    category={order.category}
                    oblast={order.oblast}
                    subject={order.subject}
                    supplierArticle={order.supplierArticle}
                    gNumber={order.gNumber}
                />
            ))}
        </div>
    );
};

export default Orders;
