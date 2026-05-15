"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleSubmit = () => {
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert(
      isLogin
        ? "Login Successful"
        : "Account Created Successfully"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="grid lg:grid-cols-2 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden max-w-6xl w-full">

        <div className="hidden lg:flex flex-col justify-center p-16 bg-gradient-to-br from-gray-950 to-gray-800">
          <h1 className="text-6xl font-bold leading-tight">
            Welcome to UniFind
          </h1>

          <p className="text-gray-400 mt-8 text-lg leading-8">
            Discover, compare, and explore universities with a
            modern platform built for students worldwide.
          </p>

          <div className="mt-10 space-y-4">
            <div className="bg-black border border-gray-700 p-5 rounded-2xl">
              🔍 Smart college discovery
            </div>

            <div className="bg-black border border-gray-700 p-5 rounded-2xl">
              ⚖️ Advanced comparison tools
            </div>

            <div className="bg-black border border-gray-700 p-5 rounded-2xl">
              🎓 Personalized exploration
            </div>
          </div>
        </div>

        <div className="p-10 lg:p-16 flex flex-col justify-center">

          <Link href="/">
            <button className="mb-8 border border-gray-700 px-4 py-2 rounded-xl w-fit">
              ← Back Home
            </button>
          </Link>

          <h2 className="text-5xl font-bold mb-3">
            {isLogin ? "Login" : "Create Account"}
          </h2>

          <p className="text-gray-400 mb-10">
            {isLogin
              ? "Continue exploring your future university."
              : "Create your UniFind student account."}
          </p>

          {!isLogin && (
            <div className="grid grid-cols-2 gap-4 mb-5">
              <input
                type="text"
                placeholder="First Name"
                className="bg-black border border-gray-700 p-4 rounded-2xl outline-none"
                value={firstName}
                onChange={(e) =>
                  setFirstName(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-black border border-gray-700 p-4 rounded-2xl outline-none"
                value={lastName}
                onChange={(e) =>
                  setLastName(e.target.value)
                }
              />
            </div>
          )}

          <input
            type="email"
            placeholder="Enter email"
            className="w-full bg-black border border-gray-700 p-4 rounded-2xl mb-5 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            className="w-full bg-black border border-gray-700 p-4 rounded-2xl mb-5 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full bg-black border border-gray-700 p-4 rounded-2xl mb-5 outline-none"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />
          )}

          {isLogin && (
            <div className="flex items-center justify-between mb-8 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <button
  onClick={() =>
    alert("Password reset link sent to your email")
  }
  className="text-gray-400 hover:text-white"
>
  Forgot password?
</button>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

          <p className="text-center text-gray-400 mt-8">
            {isLogin
              ? "New user?"
              : "Already have an account?"}

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-white font-semibold"
            >
              {isLogin ? "Create Account" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}