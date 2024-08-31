import React from 'react';
import authService from '../appwrite/auth';
import { login } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const res = await authService.loginWithGoogle();
      console.log("Google login response:", res);
      if (res) {
        const userData = await authService.getCurrentUser();
        console.log("Current user data:", userData);

        if (userData) {
          dispatch(login(userData));
          console.log("User logged in and state updated.");
        }
      }
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };


  return (
    <div className='h-screen w-full bg-zinc-950 flex justify-center items-center'>
      <div className='h-48 w-96 bg-zinc-800 rounded-lg flex flex-col justify-center items-center'>
        <h2 className='text-white text-5xl m-9 font-bold'>
          Welcome
        </h2>
        <div className="px-6 sm:px-0 max-w-sm">
          <button
            onClick={handleClick}
            type="button"
            className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2">
            <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
