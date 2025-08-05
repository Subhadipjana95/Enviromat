import React, { useState } from "react";

export default function SignupForm() {
  const [isGoogleSignup, setIsGoogleSignup] = useState(false);

  return (
      <div className="w-[400px] border border-gray-300 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {!isGoogleSignup ? (
          <>
            <button
              onClick={() => setIsGoogleSignup(true)}
              className="w-full mb-6 flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
            >
              <img
                src="https://img.icons8.com/color/24/google-logo.png"
                alt="Google"
              />
              Continue with Google
            </button>
            <div className="text-center mb-6 text-gray-500">
              Or sign up manually
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  required
                  pattern="[0-9]{10}"
                  title="Enter a valid 10 digit mobile number"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#08DF73] hover:bg-[#08df73] text-white font-semibold py-2 rounded-lg transition"
              >
                Sign Up
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-gray-700 font-semibold text-lg">
              Signing up with Google...
            </p>
            <button
              onClick={() => setIsGoogleSignup(false)}
              className="px-6 py-2 border border-[#C27BFF] text-[#C27BFF] rounded-lg hover:bg-indigo-50 transition"
            >
              Cancel Google Signup
            </button>
          </div>
        )}
      </div>
  );
}
