import React, { FC } from 'react';

import styles from './Sales.module.scss';
import { ISales } from '../../types/types';
import CardGood from '../CardGood/CardGood';

interface SalesProps {
    wbSales: Array<ISales>;
}

const Sales: FC<SalesProps> = ({ wbSales }) => {
    return (
        <div>
            <p>Sales</p>
            {wbSales.map((salesItem) => (
                <CardGood gNumber={salesItem.gNumber} />
            ))}
        </div>
    );
};

export default Sales;
