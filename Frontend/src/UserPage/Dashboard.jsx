import React from 'react';
import { ServiceChoose } from "@/UserPage/Service.choose";


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-[#FFD700] to-yellow-200 p-20">
      <div className="w-full bg-blue-600">
      <LoginedUserNav />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome to your dashboard</p>
        </header> */}

        {/* Add your new dashboard content here */}
        <ServiceChoose />
      </div>
    </div>
  );
};

export default Dashboard;
