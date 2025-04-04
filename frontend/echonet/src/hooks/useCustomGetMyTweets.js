import axios from "axios";
import { ECHO_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { getallEchos } from "../redux/echoslice";

const useCustomGetMyTweets = (id) => {
    const dispatch = useDispatch();
    const { refresh, isActive } = useSelector(store => store.echo);
    

    const fetchMyTweets = async () => {
        try {
            const res = await axios.get(`${ECHO_API_END_POINT}/allechos/${id}`, {
                withCredentials: true
            });
            console.log(res);
            dispatch(getallEchos(res.data.Echos));
        } catch (error) {
            console.log(error);
        }
    }
    const followingTweetHandler = async () => { 
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.get(`${ECHO_API_END_POINT}/followingtweets/${id}`);
            console.log(res);
            dispatch(getallEchos(res.data.Echos));
        } catch (error) {
            console.log(error);
        }
      }

    useEffect(() => {
        if(isActive){
            fetchMyTweets();
        }else{
            followingTweetHandler();
        }
    }, [isActive,refresh]);
 
};
export default useCustomGetMyTweets;