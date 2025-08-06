import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { resetPassword } from "../services/operations/authAPI"

function UpdatePassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { loading } = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { password, confirmPassword } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const token = location.pathname.split("/").at(-1)
    dispatch(resetPassword(password, confirmPassword, token, navigate))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-300 to-teal-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {loading ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-green-800 text-lg font-medium">Updating your password...</p>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-green-300/50 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-green-800 font-bold text-3xl mb-2">
              Choose New Password
            </h1>
            <p className="text-green-700 text-base leading-relaxed">
              Almost done. Enter your new password and you're all set.
            </p>
          </div>
          <form onSubmit={handleOnSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="relative block">
                <p className="mb-2 text-green-800 text-sm font-medium">
                  New Password <sup className="text-red-500">*</sup>
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
              </label>
              <label className="relative block">
                <p className="mb-2 text-green-800 text-sm font-medium">
                  Confirm New Password <sup className="text-red-500">*</sup>
                </p>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 pr-12 border-2 border-green-400/60 bg-white/70 backdrop-blur-sm rounded-xl text-green-800 text-base focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-200 hover:border-green-500/70"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-[42px] z-[10] cursor-pointer text-green-600 hover:text-green-700 transition-colors"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={20} />
                  ) : (
                    <AiOutlineEye fontSize={20} />
                  )}
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400/50 shadow-lg"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-8 flex justify-center">
            <Link to="/login" className="group">
              <div className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors duration-200">
                <BiArrowBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Login</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default UpdatePassword
