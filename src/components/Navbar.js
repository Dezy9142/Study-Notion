import React from "react";
import { Link } from "react-router-dom";
// here we use "../assets" because pehle hmko component 
// se bahar aaana parega then assets me jake logo imgage milega
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";


function Navbar(props) {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-8/12 max-w-[1160px] mx-auto py-4">
      <Link to="/">
        <img src={logo} alt="logo" width="160" height="32"  />
      </Link>
      <nav>
        <ul className="flex gap-x-6  text-richblack-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="ml-5 gap-3 mr-3 flex"  >
        {/* Kyunki Mujhe esme show karna tha ki isLoggedIn variable true hoga tab hi button use kaenge ii
        esliye esme curly braces use kiye haii to write this condition if true or not then do things */}
        { !isLoggedIn &&
          <Link to="/login">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px]
            border border-richblack-700">Log in</button>
          </Link>
        }
         {!isLoggedIn &&
          <Link to="/signup">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px]
            border border-richblack-700">Sign Up</button>
          </Link>
        }
         { isLoggedIn &&
          <Link to="/logout">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px]
            border border-richblack-700" onClick={()=>{
               setIsLoggedIn(false) ;
               toast.success("Logged Out")
            }}>Logout</button>
          </Link>
        }
         { isLoggedIn &&
          <Link to="/dashboard">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px]
            border border-richblack-700">Dashboard</button>
          </Link>
        }
        
      </div>
    </div>
  );
}

export default Navbar;
