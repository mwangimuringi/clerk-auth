import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const DashboardPage = async () => {
    const user = await currentUser();
    return (
        <div className="text-center flex items-center justify-center hc">
            <h2 className="text-lg font-medium">
                Hi {user?.firstName}
            </h2>
        </div>
    )
};

export default DashboardPage