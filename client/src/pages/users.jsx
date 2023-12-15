/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from 'react-router-dom'

const Users = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex space-x-5">
        <div className="flex flex-col items-center">
          <Link to='/login'>
          <img
            alt=""
            className="w-24 h-24 rounded-full bg-gray-500 mb-2"
            src="https://source.unsplash.com/80x80/?portrait?1"
          />
          </Link>
          <span className='font-semibold text-xl'>Admin</span>
        </div>
        <div className="flex flex-col items-center">
          <Link to='/login'>
          <img
            alt=""
            className="w-24 h-24 rounded-full bg-gray-500 mb-2"
            src="https://source.unsplash.com/80x80/?portrait?2"
          />
          </Link>
          <span className='font-semibold text-xl'>Doctor</span>
        </div>
        <div className="flex flex-col items-center">
          <Link to='/login'>
          <img
            alt=""
            className="w-24 h-24 rounded-full bg-gray-500 mb-2"
            src="https://source.unsplash.com/80x80/?portrait?3"
          />
          </Link>
          <span className='font-semibold text-xl'>Patient</span>
        </div>
      </div>
    </div>
  );
};

export default Users;
