// /src/app/dashboard/page.jsx
import { useUser } from '@clerk/nextjs';

const Dashboard = () => {
    const { user } = useUser();

    return (
        <div>
            <h1>Hoşgeldin, {user.firstName}!</h1>
            <p>Bu sizin kontrol paneliniz.</p>
        </div>
    );
};

export default Dashboard;
