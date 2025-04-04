import React,{useEffect} from 'react'
import axios from 'axios'
import { USER_API_END_POINT } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProfile } from '../redux/userSlice'
const useCustomGetProfile = async (id) => {
  const dispatch=useDispatch();


  useEffect(()=>{
    const fetchMyProfile = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`,{
                withCredentials:true
            });
            console.log(res);
          dispatch(getMyProfile(res.data.user));
        } catch (error) {
            console.log(error);
        }
    }
   fetchMyProfile();
},[id]);
}

export default useCustomGetProfile
