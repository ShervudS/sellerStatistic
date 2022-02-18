import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './cardGood.module.scss';

interface CardGoodProps {
    gNumber: string;
    brand: string;
    category: string;
    oblast: string;
    subject: string;
    supplierArticle: string;
    date: string;
    isSales?: boolean;
}

const CardGood: FC<CardGoodProps> = ({
    gNumber,
    brand,
    category,
    oblast,
    subject,
    supplierArticle,
    date,
    isSales,
}) => {
    const clasStatus = classNames(styles.status, {
        [styles.satusDone]: isSales,
    });

    return (
        <div className={styles.card}>
            <div className={clasStatus}>
                {isSales ? 'продано' : 'в процессе'}
            </div>
            <p>Заказ №: {gNumber}</p>
            {brand && <p>Бренд: {brand}</p>}
            <p>Категория товара: {category}</p>
            <p>Регион (область): {oblast}</p>
            <p>
                Товар: {subject}/{supplierArticle}
            </p>
            <p>date: {date}</p>
        </div>
    );
};

export default CardGood;
