import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Slices/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AVATAR, LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state?.user?.id)
  const dispatch = useDispatch()
  const handleClick = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())
    }).catch((error) => {
       console.log(error.message);
       
    });
    
    console.log("removed user");
    
    navigate('/')
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,user=>{
      if(user){
        const {uid, email, displayName} = user
        dispatch(addUser({
          email:email,
          id:uid,
          displayName:displayName
        }))
        navigate("/browse")
      }
      else{
        dispatch(removeUser())
        navigate("/")
      }
    })

    return () => unsubscribe()
  },[])
  
  return (
    <div className="relative z-20 flex justify-between py-4 " >
      <div className=" w-1/12">
        <img
          src={LOGO}
          alt="logo"
        />
      </div>
      {user && <div className="flex justify-end gap-4">
        <img className="w-1/12"  src={AVATAR} alt="avatar" />
        <button className="bg-red-600" onClick={handleClick}>Sign Out</button>
      </div>
      }
      
    </div>
  );
};

export default Header;
