import React from 'react'
import SignupForm from '../components/core/Auth/SignupForm'


const Signup = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-200 via-emerald-300 to-teal-200 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
            Join the Environmental Movement
          </h1>
        </div>
        
        {/* Signup Form */}
        <div className="flex justify-center">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

export default Signup