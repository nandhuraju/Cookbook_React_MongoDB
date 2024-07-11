import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("admin");
  const navigate = useNavigate();

  // signup
  const signupSubmit = async (userDetails) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    // return;
    console.log(res);
    if (res.ok) {
      toast.success(`Signup success`);
      return navigate("/");
    } else {
      toast.error(`Please check the input data`);
      return navigate("/signup");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const userDetails = {
      username,
      password,
      email,
      userType,
    };

    signupSubmit(userDetails);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an Account
        </h2>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label for="username" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              id="username"
              name="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label for="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label for="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span id="passwordError" className="text-red-500 text-sm"></span>
          </div>
          <div className="mb-6">
            <label for="confirm-password" className="block text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span
              id="confirmPasswordError"
              className="text-red-500 text-sm"
            ></span>
          </div>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 font-bold mb-2"
            >
              Sign up As
            </label>
            <select
              id="userType"
              name="userType"
              className="border rounded w-full py-2 px-3"
              required
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
