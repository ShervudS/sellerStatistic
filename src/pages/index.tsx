import MainLayout from '../components/MainLayout';
import WbStatistic from '../components/WbStatistic';
import Dashboard from '../components/Dashboard';

const Home = () => {
    return (
        <MainLayout>
            <Dashboard />
            <WbStatistic />
        </MainLayout>
    );
};

export default Home;
