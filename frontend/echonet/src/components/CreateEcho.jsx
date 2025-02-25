import React from 'react'
import Avatar from 'react-avatar'
import profile from '../assests/profile.jpg'
import { CiImageOn } from "react-icons/ci";

const CreateEcho = () => {
  return (
    <div className="w-[100%]  ">
      {/* Create Echo Div */}
      <div className="flex items-center justify-evenly border border-b-gray-200">
        <div className="cursor-pointer hover:bg-gray-200 w-full px-4 py-3 rounded-sm text-center"><h1 className="font-semibold text-gray-700  text-xl">For You<span className="text-base text-gray-400">(Similar Echos)</span></h1></div>
        <div className="cursor-pointer hover:bg-gray-200 w-full px-4 py-3 rounded-sm text-center"><h1 className="font-semibold text-gray-700 text-xl">Following<span className="text-base text-gray-400">(Resonating Echos)</span></h1></div>
        </div>
        <div className=" ">
            <div className="flex items-center p-4">
                <div><Avatar src={profile} size="40" round={true} /></div>
                <input type="text" placeholder="Echo Your Thoughts" className="w-full ml-2 outline-none border-none text-xl"/>
            </div>
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
              <div><CiImageOn size="30" /></div>
              <button className="bg-indigo-400 px-4 py-1 text-lg text-center text-white border-none rounded-full">Echo</button>
            </div>
        </div>
    </div>
  )
}

export default CreateEcho
