import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/signup");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-300 to-teal-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {loading ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-green-800 text-lg font-medium">Verifying your email...</p>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-green-300/50 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-green-800 font-bold text-3xl mb-2">
              Verify Your Email
            </h1>
            <p className="text-green-700 text-base leading-relaxed">
              We've sent a 6-digit verification code to your email address. Enter the code below to complete your registration.
            </p>
          </div>
          <form onSubmit={handleVerifyAndSignup} className="space-y-6">
            <div className="space-y-3">
              <label className="block text-green-800 text-sm font-medium mb-3">
                Enter Verification Code
              </label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => (
                  <input
                    {...props}
                    placeholder="•"
                    style={{
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    }}
                    className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-green-400/60 bg-white/70 backdrop-blur-sm rounded-xl text-green-800 text-xl font-bold text-center focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-200 hover:border-green-500/70"
                  />
                )}
                containerStyle={{
                  justifyContent: "space-between",
                  gap: "8px",
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400/50 shadow-lg"
            >
              Verify Email & Continue
            </button>
          </form>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/signup" className="group">
              <div className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors duration-200">
                <BiArrowBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Signup</span>
              </div>
            </Link>
            <button
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200 group"
              onClick={() => dispatch(sendOtp(signupData.email))}
            >
              <RxCountdownTimer className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              <span>Resend Code</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;
