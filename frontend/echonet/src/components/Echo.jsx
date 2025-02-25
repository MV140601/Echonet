import React from 'react'
import Avatar from 'react-avatar'
import profile from '../assests/profile.jpg'
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa"; import { FaRegBookmark } from "react-icons/fa";
const Echo = () => {
    return (
        <div className="border-b border-gray-200">
            <div>
                <div className="flex p-4">
                    <Avatar src={profile} size="40" round={true} />
                    <div className="ml-2 w-full">
                        <div className="flex items-center ">
                            <h1 className="font-bold">Mayuresh_V</h1>
                            <p className="text-gray-400 text-sm ml-1">@MayureshVeeramallu . 1m</p>
                        </div>
                        <div>
                            <p>Hello Devs,Lets Echo Together</p>
                        </div>
                        <div className="flex justify-between w-full my-3">
                            <div className="relative flex items-center gap-2 group cursor-pointer">
                                <div className="hover:bg-blue-100 rounded-full p-2">
                                    <FaRegHeart size="24px" />
                                </div>
                                <p>0</p>
                                <div
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block  bg-blue-200 text-black text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 w-28 text-center transition-opacity duration-200"
                                >
                                    Amplify Echo
                                </div>
                            </div>

                            <div className="relative flex items-center gap-2 group cursor-pointer">
                                <div className="hover:bg-blue-100 rounded-full p-2">
                                    <FaRegComment size="24px" />
                                </div>
                                <p>0</p>
                                <div
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block  bg-blue-200 text-black text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity w-28 duration-200"
                                >
                                    Add your Echo
                                </div>
                            </div>

                            <div className="relative flex items-center gap-2 group cursor-pointer">
                                <div className="hover:bg-blue-100 rounded-full p-2">
                                    <FaRegBookmark size="24px" />
                                </div>
                                <p>0</p>
                                <div
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-blue-200 text-black text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 w-28 transition-opacity duration-200"
                                >
                                    Bookmark Echo
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Echo
