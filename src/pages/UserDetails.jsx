import React, { useEffect, useState } from 'react';
import { Config } from '../utiles';
import { useNavigate, useParams } from 'react-router-dom';
import UserDetailsGridItem from '../components/UserDetailsGridItem';

export default function UserDetails() {
  const [user, setUser] = useState(undefined);
  const { id } = useParams();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await fetch(`${Config.url}/user/${id}`);
      const data = await response.json();
      if (data) {
        setUser(data);
        return;
      }
      setUser(undefined);
    } catch (error) {
      setUser(undefined);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {user ? (
        <div className="min-h-86 relative flex w-80 flex-col items-center rounded-r-sm bg-white px-4 pb-4 shadow-lg">
          <img
            className={`absolute -top-16 h-32 w-32 rounded-full border-2  bg-white ${
              user.gender === 'female' ? 'border-pink-500' : 'border-blue-500'
            }`}
            src={user.image}
          />
          <div className="mt-16 text-center">
            <h1 className="mt-2 text-lg font-bold">{`${user.firstName} ${user.lastName}`}</h1>
            <p>{user.email}</p>
            <div className="mt-2 grid grid-cols-[3fr_1fr_8fr] gap-0 gap-y-2 text-left">
              <UserDetailsGridItem param={'DOB'} value={user.birthDate} />
              <UserDetailsGridItem param={'Gender'} value={user.gender} />
              <UserDetailsGridItem param={'Phone'} value={user.phone} />
              <UserDetailsGridItem
                param={'University'}
                value={user.university}
              />
              <UserDetailsGridItem
                param={'Address'}
                value={`${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.country}.`}
              />
              <UserDetailsGridItem
                param={'Postal'}
                value={user.address.postalCode}
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <button
        className="focus:shadow-outline mt-4 w-80 transform rounded border border-gray-100 bg-white py-2 px-4 font-semibold text-gray-800 shadow transition duration-150 ease-in-out focus:outline-none active:scale-95 active:bg-gray-200"
        onClick={onBack}
      >
        Back
      </button>
    </div>
  );
}
