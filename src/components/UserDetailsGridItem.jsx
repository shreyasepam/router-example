import React from 'react';

export default function UserDetailsGridItem({ param, value }) {
  return (
    <>
      <div className="">{param}</div>
      <div className="">:</div>
      <div className="">{value}</div>
    </>
  );
}
