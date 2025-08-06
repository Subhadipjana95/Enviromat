import React from "react";

import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../../services/operations/authAPI"

export default function LoginForm() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    console.log("Form submitted:", formData);
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-green-300/50 p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="text-green-800 font-bold text-3xl mb-2">
          Welcome Back
        </h2>
        <p className="text-green-700 text-base leading-relaxed">
          Login to access your account and enjoy our services.
        </p>
      </div>

        <form
        onSubmit={handleOnSubmit}
        className="space-y-6"
      >
        <div className="space-y-4">
          <label className="block">
            <p className="mb-2 text-green-800 text-sm font-medium">
              Email Address <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className="w-full px-4 py-3 border-2 border-green-400/60 bg-white/70 backdrop-blur-sm rounded-xl text-green-800 text-base focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-200 hover:border-green-500/70"
            />
          </label>
          <label className="relative block">
            <p className="mb-2 text-green-800 text-sm font-medium">
              Password <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="w-full px-4 py-3 pr-12 border-2 border-green-400/60 bg-white/70 backdrop-blur-sm rounded-xl text-green-800 text-base focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-200 hover:border-green-500/70"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[42px] z-[10] cursor-pointer text-green-600 hover:text-green-700 transition-colors"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={20} />
              ) : (
                <AiOutlineEye fontSize={20} />
              )}
            </span>
            <Link to="/forgot-password">
              <p className="mt-2 text-sm text-green-600 hover:text-green-700 transition-colors duration-200 text-right">
                Forgot Password?
              </p>
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400/50 shadow-lg"
        >
          Log In
        </button>
      </form>
      <div className="mt-8 text-center">
        <p className="text-green-700 text-base">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 hover:text-green-500 font-semibold transition-colors duration-200">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
