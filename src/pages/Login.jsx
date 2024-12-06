import React from 'react';

const Login = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[30rem] bg-white p-8 rounded-lg shadow-lg space-y-6">
        <div className="text-center text-4xl font-medium text-indigo-600">Log In</div>

        {/* Email or Username input */}
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Email or Username"
            className="w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none py-2 px-3"
          />
        </div>

        {/* Password input */}
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="password"
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none py-2 px-3"
          />
        </div>

        {/* Login button */}
        <button className="w-full transform rounded-sm bg-indigo-600 py-2 text-white font-bold duration-300 hover:bg-indigo-400 focus:outline-none">
          LOG IN
        </button>

        {/* Forgot Password link */}
        <div className="text-center">
          <a href="#" className="text-sm text-indigo-500 hover:text-indigo-400">
            Forgot Password?
          </a>
        </div>

        {/* Create Account section */}
        <p className="text-center text-lg">
          No account?{' '}
          <a href="#" className="font-medium text-indigo-500 underline hover:text-indigo-400">
            Create One
          </a>
        </p>
      </div>
    </section>
  );
}

export default Login;
