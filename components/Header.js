import React from "react";
import Link from "next/link";
export default function Header({user}) {
  return (
    <nav className="bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
          <Link href="/">
            <div className="flex items-center flex-shrink-0">
              
              <h1 className="text-4xl text-gray-100 cursor-pointer">PEM</h1>
            </div>
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <h1 className="text-white uppercase">{user ? user.name : "username"}</h1>

            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img alt="..." className="w-8 h-8 mx-auto rounded-full" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
