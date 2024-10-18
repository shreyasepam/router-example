import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const session = localStorage.getItem('session');
  const navigate = useNavigate();

  const onLogoutHandle = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  const onNavigate = (path) => {
    navigate(`/${path}`);
  };

  return (
    <header className="sticky top-0 h-[56px] border-b bg-white">
      <div className="m-auto flex h-full max-w-7xl flex-row items-center border-b px-4">
        <h1 className="whitespace-nowrap font-bold cursor-pointer" onClick={() => onNavigate("")}>React app</h1>
        {session && (
          <div className="ml-8 flex h-full w-full justify-between">
            <div>
              <button
                className="focus:shadow-outline h-full transform border-x-2 border-gray-200 bg-white py-2 px-8 font-semibold text-gray-800 transition duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-gray-200"
                onClick={() => onNavigate('dashboard')}
              >
                Dashboard
              </button>
              <button
                className="focus:shadow-outline h-full transform border-r-2 border-gray-200 bg-white py-2 px-8 font-semibold text-gray-800 transition duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-gray-200"
                onClick={() => onNavigate('users')}
              >
                Users
              </button>
            </div>

            <button
              className="focus:shadow-outline transform border-x-2 border-gray-100 bg-white py-2 px-4 font-semibold text-gray-800 transition duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-gray-200"
              onClick={onLogoutHandle}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
