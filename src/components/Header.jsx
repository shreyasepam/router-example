import React from 'react';

export default function Header() {
  const session = localStorage.getItem('session');
  const onLogoutHandle = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <header className="sticky top-0 h-[56px] border-b bg-white">
      <div className="m-auto flex h-full max-w-7xl flex-row items-center justify-between border-b px-4">
        <h1 className="font-bold">React app</h1>
        {session && (
          <button
            className="focus:shadow-outline transform rounded border border-gray-100 bg-white py-2 px-4 font-semibold text-gray-800 shadow transition duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-gray-200"
            onClick={onLogoutHandle}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
