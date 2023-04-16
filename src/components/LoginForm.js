import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({setIsLoggedIn}) {
   
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setshowPassword] = useState(false);
  const navigate=useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

 function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("logged in");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler}
    className="w-full flex flex-col  mt-6 gap-y-4">
      <label className="w-full ">
        <p className=" text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>
        <input
          type="email"
          required
          value={FormData.email}
          onChange={changeHandler}
          name="email"
          placeholder="Enter email id"
          className="w-full bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-700 text-richblack-5 p-[12px]"
        />
      </label>

      <label className="w-full  relative">
        <p className=" text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={FormData.password}
          onChange={changeHandler}
          name="password"
          placeholder="Enter password"
          className="w-full bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-700 text-richblack-5 p-[12px]"
        />
        <span className=" absolute right-3 top-[41px] cursor-pointer" onClick={() => setshowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible fontSize={24}  fill="#AFB2BF"/> :
           <AiOutlineEye  fontSize={24}  fill="#AFB2BF" />}
        </span>
        <Link to="#">
          <p className="text-blue-500 w-full max-w-max ml-auto">Forget Password</p>
        </Link>
      </label>
      <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-800 px-[12px] py-[8px] mt-6">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
