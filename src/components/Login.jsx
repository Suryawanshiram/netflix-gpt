import { useRef, useState } from "react";
// import Header from "./Header";
import {checkValidData}  from ".././utils/validate"

const Login = () => {
  const [isSignForm, setIsSignInForm] = useState(true)

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignForm)
  
  }; 

  const handleButtonClick = () => { 
    // validate form data
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value ,password.current.value)
    console.log(message);
  }

  return <div>
    {/* <Header /> */}
    
    <div className="w-full flex justify-center items-between gap-5">
      <h1>Sign In</h1>
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full">
      <img className="w-44 object-contain text-sm" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
    </div>

      <form onSubmit={(e) => e.preventDefault()} className="absolute ml-56 mt-40 mx-auto items-center justify-center gap-5 p-20 bg-black right-0 left-0 flex flex-col w-3/6 bg-opacity-70 rounded-md">
        <h1 className="text-white font-bold text-3xl items-center justify-center text-justify mx-auto"> {isSignForm ? "SignIn" : "Sign Up " }</h1>
        {!isSignForm && (
          <input type="text" placeholder="Full Name" className="px-4 py-2 m-3 rounded-md " />
        )}
        <input ref={email} type="text" placeholder="Email address" className="px-4 py-2 m-3 rounded-md bg-gray-40" />
           <input ref={password} type="password" placeholder="Password" className="px-4 py-2 rounded-md m-3 bg-slate-300" />
        <button onClick={ handleButtonClick} className="mx-auto w-full px-4 items-center justify-center text-center py-2 rounded-md  bg-red-500 gap-5">{isSignForm ? "Sign In" : "Sign Up"}</button>
         <p className="text-white  py-4" onClick={toggleSignInForm}>New to Netflix? Sign Up Now</p>
        </form>
      </div>
    <div className="w-full flex">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
    </div>
  </div>;
};

export default Login;
