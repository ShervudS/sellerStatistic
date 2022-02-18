import React, { FC } from 'react';

import styles from './sales.module.scss';
import { ISales } from '../../types/types';
import CardGood from '../CardGood';

interface SalesProps {
    wbSales: Array<ISales>;
}

const Sales: FC<SalesProps> = ({ wbSales }) => {
    return (
        <div className={styles.sales}>
            <p className={styles.title}>Выкупы</p>
            <div className={styles.list}>
                {wbSales.map((salesItem, index) => (
                    <CardGood
                        key={salesItem.gNumber.toString() + index}
                        brand={salesItem.brand}
                        category={salesItem.category}
                        oblast={salesItem.oblastOkrugName}
                        subject={salesItem.subject}
                        supplierArticle={salesItem.supplierArticle}
                        gNumber={salesItem.gNumber}
                        date={salesItem.date}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sales;
