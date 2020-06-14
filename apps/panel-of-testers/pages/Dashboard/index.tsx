import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
    const router = useRouter();
    useEffect(() => {
        const { pathname } = router
        if (pathname === '/dashboard') {
            router.push('/')
        }
    }, [router]);

    return <div>Dashboard</div>
};

export default Dashboard;