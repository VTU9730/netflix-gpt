import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../Slices/userSlice";
const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state?.user?.id)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(removeUser())
    navigate('/')
  }
  return (
    <div className="relative z-20 flex justify-between py-4 " >
      <div className=" w-1/12">
        <img
          src="https://imgs.search.brave.com/pB7rmF0nJIRrC9TeIkUEjCoOrOx8oh-ZcEy8Qci1QgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n"
          alt="logo"
        />
      </div>
      {user && <div className="flex justify-end gap-4">
        <img className="w-1/12"  src="https://avatars.githubusercontent.com/u/104155228?v=4" alt="avatar" />
        <button className="bg-red-600" onClick={handleClick}>Sign Out</button>
      </div>
      }
      
    </div>
  );
};

export default Header;
