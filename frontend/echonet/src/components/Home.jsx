import React from 'react'
import Leftsidebar from '../components/Leftsidebar'
import Feed from '../components/Feed'
import Rightsidebar from '../components/Rightsidebar'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className="flex justify-between w-[80%] mx-auto ">
      <Leftsidebar/>
      <Outlet/>
      <Rightsidebar/>
    </div>
  )
}

export default Home
