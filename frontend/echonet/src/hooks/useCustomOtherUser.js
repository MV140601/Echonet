import React,{useEffect} from 'react'
import axios from 'axios'
import { USER_API_END_POINT } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProfile, getotherUsers } from '../redux/userSlice'
const useCustomOtherUser = async (id) => {
  const dispatch=useDispatch();


  useEffect(()=>{
    const fetchOtherUsers = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/otheruser/${id}`,{
                withCredentials:true
            });
            console.log(res);
          dispatch(getotherUsers(res.data.otherUsers));
        } catch (error) {
            console.log(error);
        }
    }
    fetchOtherUsers();
},[id]);
}

export default useCustomOtherUser
