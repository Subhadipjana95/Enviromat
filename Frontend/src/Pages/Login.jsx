import React from 'react'
import LoginForm from '../components/core/Auth/LoginForm'

const Login = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-200 via-emerald-300 to-teal-200 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Welcome to Enviromat
          </h1>
        </div>
        
        {/* Login Form */}
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login