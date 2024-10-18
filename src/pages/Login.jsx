import React from 'react';

export default function Login() {
  const onLoginHandle = () => {
    localStorage.setItem('session', "true");
    window.location.href = "/"
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="w-80 rounded-sm bg-white p-8 text-center shadow-md">
        <h1 className="text-2xl font-bold">Please click to login</h1>
        <button
          onClick={onLoginHandle}
          className="focus:shadow-outline mt-8 w-52  transform rounded border border-gray-500 bg-white py-2 px-4 font-semibold text-gray-800 shadow transition duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-gray-200"
        >
          Login
        </button>
      </div>
    </div>
  );
}
