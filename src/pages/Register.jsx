import React from "react";

const Register = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[30rem] bg-white p-8 rounded-lg shadow-lg space-y-6">
        <div className="text-center text-4xl font-medium text-indigo-600">
          Create Account
        </div>

        {/* Full Name input */}
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none py-2 px-3"
          />
        </div>

        {/* Email input */}
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="email"
            placeholder="Email"
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

        {/* Confirm Password input */}
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none py-2 px-3"
          />
        </div>

        {/* Register button */}
        <button className="w-full transform rounded-sm bg-indigo-600 py-2 text-white font-bold duration-300 hover:bg-indigo-400 focus:outline-none">
          CREATE ACCOUNT
        </button>

        {/* Already have an account link */}
        <div className="text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="#" className="text-indigo-500 hover:text-indigo-400">
              Log In
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
