import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();

    const onNavigateHandle = (path) => {
        navigate(`/dashboard/${path}`)
    }
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold mt-4 text-lg'>Dashboard</h1>
      <div className='w-full md:w-3/6'>
        <button
          className="focus:shadow-outline mt-4 w-3/6 transform rounded border border-gray-100 bg-white py-2 px-4 font-semibold text-gray-800 shadow transition duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-gray-200"
          onClick={() => onNavigateHandle("profile")}
        >
          Profile
        </button>
        <button
          className="focus:shadow-outline mt-4 w-3/6 transform rounded border border-gray-100 bg-white py-2 px-4 font-semibold text-gray-800 shadow transition duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-gray-200"
          onClick={() => onNavigateHandle("settings")}
        >
          Settings
        </button>
      </div>
      <Outlet />
    </div>
  );
}
