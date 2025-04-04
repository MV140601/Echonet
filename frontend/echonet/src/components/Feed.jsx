import React from 'react'
import CreateEcho from './CreateEcho'
import Echo from './Echo'
import {useSelector} from "react-redux";

const Feed = () => {
  const {Echos} = useSelector(store=>store.echo);

  return (
    <div className="w-[50%] border border-gray-200">
      <CreateEcho/>
       {
          Echos?.map((Ec)=> <Echo key={Ec?._id} Echo={Ec}/>)
        }  

    </div>
  )
}

export default Feed
