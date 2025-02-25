import React from 'react'
import { CiSearch } from "react-icons/ci";
import logo from '../assests/echonetlogo.jpg'
import Avatar from 'react-avatar';
const Rightsidebar = () => {
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
        <div className="flex items-center justify-between  my-3">
          <div className="flex">
            <div><Avatar src={logo} size="40" round={true} /></div>
            <div className="ml-2"><h1 className="font-bold">Mayuresh</h1><p className="text-sm">@Mayuresh_V</p></div>
          </div>
          <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">Profile</button>
          </div>
        </div>
        <div className="flex items-center justify-between  my-3">
          <div className="flex">
            <div><Avatar src={logo} size="40" round={true} /></div>
            <div className="ml-2"><h1 className="font-bold">Mayuresh</h1><p className="text-sm">@Mayuresh_V</p></div>
          </div>
          <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">Profile</button>
          </div>
        </div>
        <div className="flex items-center justify-between  my-3">
          <div className="flex">
            <div><Avatar src={logo} size="40" round={true} /></div>
            <div className="ml-2"><h1 className="font-bold">Mayuresh</h1><p className="text-sm">@Mayuresh_V</p></div>
          </div>
          <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightsidebar
