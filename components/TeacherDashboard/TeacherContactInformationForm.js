import React from "react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/auth";
export default function TeacherContactInformationForm() {
  const {user} = useAuth();
  useEffect(() => {
    console.log(user)
  })
  const {email} = user
  return (
    <div className="flex items-center justify-center w-1/4 ">
    <div>
      <form className="p-10 bg-white rounded-lg shadow-lg ">
        <h1 className="mb-6 font-sans text-2xl font-bold text-center text-gray-600">
          Contact Information
        </h1>
        <div>
          <label
            className="block my-3 font-semibold text-gray-800 text-md"
            htmlFor="phone-number"
          >
            Phone Number
          </label>
          <input
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
            type="tel"
            name="phone-number"
            id="phone-number"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <label
            className="block my-3 font-semibold text-gray-800 text-md"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="@email"
            value={user.email}
          />
        </div>
        <div>
          <label
            className="block my-3 font-semibold text-gray-800 text-md"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
            type="text"
            name="address"
            id="password"
            placeholder="Address"
          />
        </div>
        
        <button
          type="submit"
          className="w-full px-4 py-2 mt-6 font-sans text-lg font-semibold tracking-wide text-white bg-gray-800 rounded-lg hover:bg-gray-600"
        >
          Update
        </button>
        
      </form>
    </div>
  </div>
  );
}
