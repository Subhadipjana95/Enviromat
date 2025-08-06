import React from "react";

export default function LoginForm() {
  return (
    <div className="w-[400px] border border-gray-300 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Login
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Login to access your account and enjoy our services.
      </p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="loginMobile"
            className="block text-gray-700 font-semibold mb-1"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="loginMobile"
            name="loginMobile"
            placeholder="Enter your mobile number"
            required
            pattern="[0-9]{10}"
            title="Enter a valid 10 digit mobile number"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="loginPassword"
            className="block text-gray-700 font-semibold mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="loginPassword"
            name="loginPassword"
            placeholder="Enter your password"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            autoComplete="current-password"
          />
        </div>
        <div>
          <label
            htmlFor="loginEmail"
            className="block text-gray-700 font-semibold mb-1"
          >
            Email ID
          </label>
          <input
            type="email"
            id="loginEmail"
            name="loginEmail"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#C27BFF] hover:bg-[#C27BFF] text-white font-semibold py-2 rounded-lg transition"
        >
          Login
        </button>
      </form>
      <p className="text-center text-gray-600 mt-4">
        Don't have an account?{" "}
        <a href="/signup" className="text-[#C27BFF] font-medium">
          Sign up
        </a>
      </p>
    </div>
  );
}
