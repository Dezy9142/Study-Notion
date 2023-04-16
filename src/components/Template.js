import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {FcGoogle} from "react-icons/fc";

// we use template because there is common in signup and login page for reusibility


function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
  return (
    <div  className="max-w-[1160px] w-8/12 mx-auto  h-screen flex justify-between my-12 space-y-0  space-x-12">
      <div className="w-8/12 max-w-[450px]">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem]  leading-[2.75rem]">{title}</h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className="text-blue-100">{desc2}</span>
        </p>
        {formType === "signup" ? 
        <SignupForm  setIsLoggedIn={setIsLoggedIn}/> : 
        <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
        <div className="w-full flex items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className="font-medium leading-[1.375rem] text-richblack-700">OR</p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>
        <button className="w-full flex items-center justify-center rounded-[8px] text-richblack-100
        px-[12px] gap-x-2 mt-6 font-medium py-[8px] border border-richblack-700"> <FcGoogle/>Sign Up with Google</button>
      </div>
      <div className="relative   w-8/12 max-w-[450px]">
        <img src={frameImage} alt="frameImg" width={550} height={505} loading="lazy" />
        <img  className="absolute -top-4 right-4 " src={image} alt="studentImg" width="500" height="450" loading="lazy" />
      </div>
    </div>
  );
}

export default Template;
