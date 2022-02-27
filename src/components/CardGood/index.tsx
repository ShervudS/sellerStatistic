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
        [styles.statusDone]: isSales,
    });

    return (
        <div className={styles.card}>
            <div className={clasStatus}>
                {isSales ? 'продано' : 'в процессе'}
            </div>

            <p className={styles.title}>
                Заказ №:<span> {gNumber}</span>
            </p>

            {brand && <p className={styles.line}>Бренд: {brand}</p>}
            <p className={styles.line}>Категория товара: {category}</p>
            <p className={styles.line}>Регион (область): {oblast}</p>
            <p className={styles.line}>
                Товар: {subject}/{supplierArticle}
            </p>
            <p className={styles.line}>Дата : {date}</p>
        </div>
    );
};

export default CardGood;
