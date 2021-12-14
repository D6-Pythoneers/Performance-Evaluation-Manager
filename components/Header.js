import React from "react";

export default function Header({user}) {
  return (
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <h1 className="text-4xl text-gray-100">PEM</h1>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <h1 className="text-white uppercase">{user.name}</h1>

            <div class="ml-3 relative">
              <div>
                <button
                  type="button"
                  class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img alt="..." class="w-8 h-8 mx-auto rounded-full" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
