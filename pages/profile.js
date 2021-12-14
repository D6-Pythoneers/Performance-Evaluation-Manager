import React from "react";
export default function ManagerProfile({ user }) {
    return (
        <div className="flex flex-col max-w-md px-4 mx-auto bg-gray-200 bg-center bg-no-repeat bg-cover opacity-100 font-poppins">
            <div className="flex items-center bg-blue-600 rounded-full w-80 h-80">
                    <img alt="..." className="mx-auto rounded-full w-80 h-80" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" />
                </div>
                <div className="flex items-center justify-between px-4 pt-12">
                
                <div className="flex items-center ">
                    <div className="flex flex-col pl-4 leading-none ">
                        <h3 className="w-full text-2xl font-bold uppercase">Name :{user.name}</h3>
                        <p className="mt-3 text-xl font-semibold text-gray-600">Email : {user.email}</p>
                        <p className="pt-1 text-lg font-light text-gray-700">Role : {user.role}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full px-4 pt-12">
            </div>
            <div className="flex flex-col w-full px-4 pt-12">
                <p className="font-semibold text-gray-600">{user.school}</p>
            </div>
        </div>
    );
}

