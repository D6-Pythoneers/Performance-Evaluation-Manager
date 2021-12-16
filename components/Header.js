import React from "react";
import Link from "next/link";
import { useAuth } from "../contexts/auth";
const { useState, useEffect, useRef } = React;
export default function Header ({ user }) {
  const { logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  // create a React ref for the dropdown element
  const dropdown = useRef(null);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showDropdown) return;
    function handleClick (event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showDropdown]);
  return (
    <>
      <nav className="bg-gray-800 border-b-2 border-blue-300 outline-none focus:bg-gray-300">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>

                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
              <div className="flex items-center flex-shrink-0">
                <img className="block w-auto h-8 lg:hidden" src="https://i.ibb.co/71rGjSd/PEM-removebg-preview.png" alt="Workflow" />
                <img className="hidden w-auto h-8 lg:block" src="https://i.ibb.co/71rGjSd/PEM-removebg-preview.png" alt="Workflow" />
              </div>
            
            </div>

            <div data-cy="pop-up" className="relative ml-3">
              <div >
                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => setShowDropdown(b => !b)}>
                  <p className='mt-1 ml-2 mr-2 text-white uppercase'>{user.name}</p>
                  <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/3YpLCb6/15346636991003506792default-user.png" alt="" />
                </button>
              </div>
              
              {showDropdown && (
                <div className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">

                  <a href="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                  <a data-cy="logout-button" href="/" onClick={() => logout()} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>)}
            </div>
          </div>
        </div>
    
    </nav>
    </>
  );
}
