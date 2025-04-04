import React, { useEffect } from 'react'
import Leftsidebar from '../components/Leftsidebar'
import Feed from '../components/Feed'
import Rightsidebar from '../components/Rightsidebar'
import { Outlet } from 'react-router-dom'
import useCustomOtherUser from '../hooks/useCustomOtherUser'
import { useSelector } from 'react-redux'
import useCustomGetMyTweets from '../hooks/useCustomGetMyTweets'
 
const Home = () => {
  const {user,otherUsers}=useSelector(store=>store.user);

useCustomOtherUser(user?._id);
useCustomGetMyTweets(user?._id);
  return (
    <div className="flex justify-between w-[80%] mx-auto ">
      <Leftsidebar/>
      <Outlet/>
      <Rightsidebar otherUsers={otherUsers}/>
    </div>
  )
}

export default Home
