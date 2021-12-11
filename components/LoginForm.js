import React from "react";
import { useState } from "react";
import { useAuth } from "../contexts/auth";
export default function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  const { login } = useAuth();
  const handleLogin = (e) => {
      e.preventDefault();
      console.log(username, password)
      login(username, password)
  } 
  return (
    <div className="w-full max-w-xs">
      <form
      onSubmit={(e) => handleLogin(e)} 
      className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="ID"
          >
            ID
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Your ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      <p className="text-xs text-center text-gray-500">
        &copy; Ministry of Eduction. All rights reserved.
      </p>
    </div>
  );
}
