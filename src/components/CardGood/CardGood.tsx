import React, { FC } from 'react';

import styles from './cardGood.module.scss';

interface CardGoodProps {
    gNumber: string;
    brand: string;
    category: string;
    oblast: string;
    subject: string;
    supplierArticle: string;
}

const CardGood: FC<CardGoodProps> = ({
    gNumber,
    brand,
    category,
    oblast,
    subject,
    supplierArticle,
}) => {
    return (
        <div className={styles.card}>
            <p>Заказ №: {gNumber}</p>
            <p>Бренд: {brand}</p>
            <p>Категория товара: {category}</p>
            <p>Регион (область): {oblast}</p>
            <p>
                Товар: {subject}/{supplierArticle}
            </p>
        </div>
    );
};

export default CardGood;
