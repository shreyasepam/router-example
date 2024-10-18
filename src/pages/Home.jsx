import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const onNavigate = (path) => {
    navigate(`/${path}`);
  };
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="w-80 rounded-sm bg-white p-8 text-center shadow-md">
        <button
          onClick={() => onNavigate('dashboard')}
          className="focus:shadow-outline w-52  transform rounded border border-gray-500 bg-white py-2 px-4 font-semibold text-gray-800 shadow transition duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-gray-200"
        >
          Dashboard
        </button>
        <button
          onClick={() => onNavigate('users')}
          className="focus:shadow-outline mt-8 w-52  transform rounded border border-gray-500 bg-white py-2 px-4 font-semibold text-gray-800 shadow transition duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-gray-200"
        >
          Users
        </button>
      </div>
    </div>
  );
}
