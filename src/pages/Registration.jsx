import React from 'react'
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
    <div className="container max-w-md mx-auto space-y-8">

      {/* Logo */}
      <div className="flex justify-center">
        <h1 className="bg-blue-700 text-white rounded-full px-6 py-2 font-nunito text-lg font-semibold">
          ChatApp
        </h1>
      </div>

      {/* Title */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-indigo-900 font-nunito">Get started with easily register</h2>
        <p className="mt-2 text-sm text-gray-500 font-nunito">
          Free register and you can enjoy it
        </p>
      </div>

      {/* Form */}
      <form className="mt-8 space-y-6">
        <div className="space-y-4">

          {/* Email Field */}
          <div className="flex flex-col items-center">
            <label className="block text-xs text-gray-500 mb-1 text-center w-full font-nunito" htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Full Name Field */}
          <div className="flex flex-col items-center">
            <label className="block text-xs text-gray-500 mb-1 text-center w-full font-nunito" htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col items-center">
            <label className="block text-xs text-gray-500 mb-1 text-center w-full font-nunito" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-nunito"
          >
            Sign up
          </button>
          <p className="text-center text-sm text-gray-600 mt-4 font-nunito">
            Already have an account? 
          <Link to="/login" className="text-blue-600 hover:underline ml-1 font-nunito">Login</Link>
           </p>
        </div>

      </form>

    </div>
  </section>
  )
}

export default Registration