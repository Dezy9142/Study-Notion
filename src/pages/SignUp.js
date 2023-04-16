import React from 'react'
import Template from '../components/Template'
import signInImg from '../assets/signup.png'

function SignUp({setIsLoggedIn}) {
  return (
    <div> 
      <Template 
    title="Join the millions learning to code with studyNotion for free"
    desc1="Build skills for today,tomorrow and beyond."
    desc2="Education to future-proof your career."
    image={signInImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
    /></div>
  )
}

export default SignUp