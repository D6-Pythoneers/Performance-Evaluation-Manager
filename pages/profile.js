import React from "react";
export default function ManagerProfile({ user }) {
    return (
        <div className=" flex flex-col max-w-md mx-auto bg-gray-200 opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center">
            <div className="w-80 h-80 bg-blue-600 flex items-center rounded-full">
                    <img alt="..." className="w-80 h-80 mx-auto rounded-full" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" />
                </div>
                <div className="flex items-center px-4 pt-12 justify-between">
                
                <div className=" flex items-center">
                    <div className=" flex flex-col leading-none pl-4">
                        <h3 className="text-2xl font-bold uppercase w-full">Name :{user.name}</h3>
                        <p className="text-xl font-semibold text-gray-600 mt-3">Email : {user.email}</p>
                        <p className="text-lg pt-1 font-light text-gray-700">Role : {user.role}</p>
                    </div>
                </div>
            </div>
            <div className="pt-12 px-4 w-full flex flex-col">
                
                
            </div>
            <div className="pt-12 px-4 w-full flex flex-col">
                <p className="font-semibold text-gray-600">{user.school}</p>

            </div>
        </div>
    );
}

