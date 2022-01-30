import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';

import styles from './page404.module.scss';

const Page404 = () => {
    return (
        <MainLayout>
            <h2 className={styles.title}>Произошла ошибка</h2>
            <button className={styles.backBtn}>
                <Link href="/">Back</Link>
            </button>
        </MainLayout>
    );
};
export default Page404;
