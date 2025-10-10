import { getUser } from '@/actions/auth';
import React from 'react';

const DashboardPage = async () => {
    const user = await getUser();
    return (
        <div className="max-w-sm mx-auto bg-gray-900 text-gray-100 rounded-2xl shadow-2xl border border-transparent hover:border-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-all duration-300 p-10 relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20 blur-3xl pointer-events-none"></div>

            <div className="relative flex flex-col items-center space-y-4">
                {/* Avatar */}
                <div className="w-28 h-28 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    {user?.data?.name?.charAt(0)}
                </div>

                {/* User Info */}
                <h2 className="text-2xl font-semibold">{user?.data?.name}</h2>
                <p className="text-gray-400">{user?.data?.email}</p>

                {/* Divider */}
                <div className="w-full border-t border-gray-700 my-2"></div>

                {/* Details */}
                <div className="flex flex-col w-full text-sm space-y-1">
                    <p>
                        <span className="font-medium text-gray-300">Role:</span> {user?.data?.role}
                    </p>
                    <p>
                        <span className="font-medium text-gray-300">Joined:</span>{" "}
                        {user?.data?.createdAt ? new Date(user.data.createdAt).toLocaleDateString() : "N/A"}
                    </p>
                </div>

                {/* Actions */}
                <div className="w-full flex justify-center mt-4">
                    <button className="px-5 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;