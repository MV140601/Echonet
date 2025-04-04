import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { GoHash } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Leftsidebar = () => {
    const {user,profile}=useSelector(store=>store.user); 

    return (
        <div className="w-[20%]">
            <div>
                {/* Echonet Logo div */}
                <div className="flex align-middle mt-3 ">
                    {/* <img src={logo} alt="ECHONET LOGO" className="w-[50px] h-[50px] ml-5 pt-2" /> */}
                    <h1 className="text-7xl mx-auto font-extrabold  text-blue-400 cursor-pointer font-Italianno hover:drop-shadow-md tracking-widest" >EchoPoint</h1>
                </div>
                {/* Sidebar items div */}
                <div className="my-4">
                    <Link to="/" className=" my-2 flex items-center px-4 py-2 rounded-full hover:bg-gray-100   hover:cursor-pointer">
                        <div>
                            <CiHome size="30px" />
                        </div>
                        <h1 className="ml-2 text-lg font-bold">Home</h1>
                    </Link>  <div className=" my-2 flex items-center px-4 py-2 rounded-full hover:bg-gray-100   hover:cursor-pointer">
                        <div>
                            <GoHash size="30px" />
                        </div>
                        <h1 className="ml-2 text-lg font-bold">Explore</h1>
                    </div>  <div className=" my-2 flex items-center px-4 py-2 rounded-full hover:bg-gray-100   hover:cursor-pointer">
                        <div>
                            <IoIosNotificationsOutline size="30px" />
                        </div>
                        <h1 className="ml-2 text-lg font-bold">Notification</h1>
                    </div>
                    <Link to={`/profile/${user?._id}`} className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                            <CiUser size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>Profile</h1>
                    </Link>
                    <div className=" my-2 flex items-center px-4 py-2 rounded-full hover:bg-gray-100   hover:cursor-pointer">
                        <div>
                            <CiBookmark size="30px" />
                        </div>
                        <h1 className="ml-2 text-lg font-bold">Bookmarks</h1>
                    </div>
                    <div className=" my-2 flex items-center px-4 py-2 rounded-full hover:bg-gray-100   hover:cursor-pointer">
                        <div>
                            <CiLogout size="30px" />
                        </div>
                        <h1 className="ml-2 text-lg font-bold">Logout</h1>
                    </div>
                    <button className="px-4 py-2 border-none text-md bg-indigo-400 text-white w-full rounded-full font-bold ">Create Echo</button>
                </div>
            </div>
        </div>
    )
}

export default Leftsidebar
