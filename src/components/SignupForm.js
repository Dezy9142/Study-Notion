import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setshowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (FormData.password !== FormData.confirmPassword) {
      toast.error("password do not match");
    }
    setIsLoggedIn(true);
    toast.success("Account created");
    navigate("/dashboard");
  }
  return (
    <div >
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        {/* for firstname and last name side by side */}
        <div className="flex  gap-3 ">
          <label className="w-full mt-[15px]" >
            <p className=" text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={FormData.firstname}
              className="w-full bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-700 text-richblack-5 p-[12px]"
            />
          </label>
          <label  className="w-full mt-[15px]">
            <p className=" text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter last name"
              value={FormData.lastname}
              className="w-full bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-700 text-richblack-5 p-[12px]"
            />
          </label>
        </div>
        {/* email add */}
        <label className="w-full ">
          <p className=" text-richblack-5 text-[0.875rem] mb-1 mt-[15px] leading-[1.375rem]">
            Email address<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email"
            value={FormData.email}
            className="w-full bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-700 text-richblack-5 p-[12px]"
          />
        </label>

        {/* Create password and confirm password */}
        <div className="flex space-x-3">
          <label className="relative w-full">
            <p className=" text-richblack-5 text-[0.875rem] mb-1 mt-[15px] leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter password"
              value={FormData.password}
              className="w-full bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-700 text-richblack-5 p-[12px]"
            />
            <span className=" absolute right-3 top-[41px] cursor-pointer" onClick={() => setshowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={24}  fill="#AFB2BF" /> : <AiOutlineEye fontSize={24}  fill="#AFB2BF" />}
            </span>
          </label>

          <label className="relative w-full">
            <p className=" text-richblack-5 text-[0.875rem] mb-1 mt-[15px] leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm password"
              value={FormData.confirmPassword}
              className="w-full bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-700 text-richblack-5 p-[12px]"
            />
            <span className=" absolute right-3 top-[41px] cursor-pointer" onClick={() => setshowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={24}  fill="#AFB2BF"/> : <AiOutlineEye fontSize={24}  fill="#AFB2BF" />}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-800 px-[12px] py-[8px] mt-6">Create Account</button>
      </form>
    </div>
  );
}

export default SignupForm;
