import React from 'react'
import { CiSearch } from "react-icons/ci";
import logo from '../assests/echonetlogo.jpg'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
const Rightsidebar = ({ otherUsers }) => {
  return (
    <div className="w-[25%] " >
      {/* Search  Div */}
      <div className="p-2 bg-gray-100 rounded-full outline-none flex items-center w-full ">
        <CiSearch size={25} />
        <input type="text" className="bg-transparent outline-none px-2" placeholder="search" />
      </div>
      {/* more people  Div */}
      <div className="p-4 bg-gray-100 rounded-2xl my-4 ">
        <h1 className="font-bold text-lg "> Echo along with</h1>
        {otherUsers?.length > 0 ? (
          otherUsers.map((user) => (
            <div key={user?._id} className="flex items-center justify-between my-3">
              <div className="flex">
                <Avatar src={logo} size="40" round={true} />
                <div className="ml-2">
                  <h1 className="font-bold">{user?.Name || "Unknown User"}</h1>
                  <p className="text-sm">@{user?.UserName || "unknown"}</p>
                </div>
              </div>
              <Link to={`/profile/${user?._id}`}>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                  </Link>            </div>
          ))
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}

      </div>
    </div>
  )
}

export default Rightsidebar
