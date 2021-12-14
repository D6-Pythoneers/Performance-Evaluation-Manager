import React from "react";
export default function ManagerProfile({ user }) {
    return (
        <div class=" flex flex-col max-w-md mx-auto bg-gray-200 opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center">
            <div class="w-80 h-80 bg-blue-600 flex items-center rounded-full">
                    <img alt="..." class="w-80 h-80 mx-auto rounded-full" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" />
                </div>
                <div class="flex items-center px-4 pt-12 justify-between">
                
                <div class=" flex items-center">
                    <div class=" flex flex-col leading-none pl-4">
                        <h3 class="text-2xl font-bold uppercase w-full">Name :{user.name}</h3>
                        <p class="text-xl font-semibold text-gray-600 mt-3">Email : {user.email}</p>
                        <p class="text-lg pt-1 font-light text-gray-700">Role : {user.role}</p>
                    </div>
                </div>
            </div>
            <div class="pt-12 px-4 w-full flex flex-col">
                
                
            </div>
            <div class="pt-12 px-4 w-full flex flex-col">
                <p class="font-semibold text-gray-600">{user.school}</p>

            </div>
        </div>
    );
}

