import React, { useEffect, useState } from 'react';
import { Config } from '../utiles';
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState(undefined);

  const getUsers = async () => {
    try {
      const response = await fetch(`${Config.url}/users`);
      const data = await response.json();
      if (data && data?.users?.length > 0) {
        setUsers(data.users);
        return;
      }
      setUsers(undefined);
    } catch (error) {
      setUsers(undefined);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {users?.map((user) => (
        <Link className="no-underline" to={`${user.id}`}>
          <div className="flex cursor-pointer flex-row rounded-sm bg-white p-4 shadow-md hover:shadow-xl items-center">
            <img
              className={`mr-2 h-16 w-16 rounded-full border-2 object-cover ${
                user.gender === 'female' ? 'border-pink-500' : 'border-blue-500'
              } `}
              src={user.image}
            />
            <ul className="overflow-hidden">
              <li
                title={`${user.firstName} ${user.lastName}`}
                className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-semibold"
              >{`${user.firstName} ${user.lastName}`}</li>
              <li
                title={`${user.address.country}, ${user.address.stateCode}`}
                className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm"
              >{`${user.address.country}, ${user.address.stateCode}`}</li>
              <li
                title={user.phone}
                className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base"
              >
                {user.phone}
              </li>
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
