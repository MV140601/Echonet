import React from 'react'
import banner from '../assests/banner.jpg';
import profile from '../assests/profile.jpg'
import Avatar from 'react-avatar';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import useCustomGetProfile from '../hooks/usecustomGetProfile';
import { useSelector } from 'react-redux'
const Profile = () => {
 
   const {user,profile}=useSelector(store=>store.user); 
 console.log("this is from profile page--->",user);
  useCustomGetProfile(user?._id);
  return (
    <div className='w-[50%] border-r-2 border-l-2 border-gray-200'>
      <div>
        <div className='flex items-center  py-2'>
          <Link to="/" className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'><IoMdArrowBack size={24}/></Link>
          <div className='ml-2'>
          <h1 className='font-bold text-lg'>{profile?.Name}</h1>
          <h1 className='text-gray-500 text-sm'>10 post</h1>
          </div>
        </div>
        <img src={banner} alt='banner' className='w-full'/>
        <div className='absolute top-80 ml-3 border-4 border-white rounded-full'>
        <Avatar src={profile} size="120" round={true} />
        </div>
        <div className='text-right m-4 '>
          <button className='px-4 py-1 rounded-full  border-2 border-black hover:bg-gray-200'>Edit Profile</button>
        </div>
        <div className='m-4'>
          <h1 className='font-bold text-xl'>{profile?.Name}</h1>
          <p>{profile.UserName}</p>
        </div>
        <div>
          <p>this is a developer bio </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
