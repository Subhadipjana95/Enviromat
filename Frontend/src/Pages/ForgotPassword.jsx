import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { getPasswordResetToken } from "../services/operations/authAPI"

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-300 to-teal-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {loading ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-green-800 text-lg font-medium">Processing your request...</p>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-green-300/50 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              {!emailSent ? (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
            </div>
            <h1 className="text-green-800 font-bold text-3xl mb-2">
              {!emailSent ? "Reset Your Password" : "Check Your Email"}
            </h1>
            <p className="text-green-700 text-base leading-relaxed">
              {!emailSent
                ? "Have no fear. We'll email you instructions to reset your password. If you don't have access to your email we can try account recovery."
                : `We have sent the reset email to ${email}`}
            </p>
          </div>
          <form onSubmit={handleOnSubmit} className="space-y-6">
            {!emailSent && (
              <div className="space-y-3">
                <label className="block">
                  <p className="mb-2 text-green-800 text-sm font-medium">
                    Email Address <sup className="text-red-500">*</sup>
                  </p>
                  <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 border-2 border-green-400/60 bg-white/70 backdrop-blur-sm rounded-xl text-green-800 text-base focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-200 hover:border-green-500/70"
                  />
                </label>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400/50 shadow-lg"
            >
              {!emailSent ? "Submit" : "Resend Email"}
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

export default ForgotPassword
