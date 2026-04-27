import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-xl">

        {/* Logo / Title */}
        <h1 className="text-center text-3xl font-bold text-blue-600">
          IAM Secure
        </h1>

        {/* Subtitle */}
        <h2 className="text-center text-xl font-semibold mt-4">
          Sign In to IAM Secure
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Enter your credentials to access your account.
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">
              Username or Email
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>

            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>

        </form>

        {/* Create Account */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Create Account
          </a>
        </p>

      </div>
    </div>
  );
}
  

