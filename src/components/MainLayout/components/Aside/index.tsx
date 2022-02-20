import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './Aside.module.scss';
import IconMenuMode from '../../../../assets/images/icon/icon-hide-menu.svg';
import IconDashboard from '../../../../assets/images/icon/icon-dashboard.svg';

interface AsideProps {}

const Index: FC<AsideProps> = ({}) => {
    const router = useRouter();

    const itemWrapperClasses = classNames(styles.itemWrapper, {
        [styles.itemActive]: router.asPath === '/',
    });

    return (
        <aside className={styles.aside}>
            <div className={styles.asideRow}>
                <div className={styles.asideCol}>
                    <div className={styles.logo}>Seller Statistic</div>
                </div>

                <div className={styles.asideCol}>
                    <button className={styles.asideMode}>
                        <IconMenuMode />
                    </button>
                </div>
            </div>

            <ul className={styles.asideList}>
                <li className={styles.asideItem}>
                    <Link href="/">
                        <a>
                            <div className={itemWrapperClasses}>
                                <IconDashboard />
                                <span>Dashboard</span>
                            </div>
                        </a>
                    </Link>
                </li>

                <li className={styles.asideItem}>
                    <Link href="/">
                        <a>
                            <div className={itemWrapperClasses}>
                                <IconDashboard />
                                <span>Dashboard</span>
                            </div>
                        </a>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Index;
