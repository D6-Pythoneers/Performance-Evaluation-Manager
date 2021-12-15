import React from "react";
import { useAuth } from "../contexts/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pagination from "../components/TeacherDashboard/Pagination";
export default function ManagerProfile () {
  const { user } = useAuth();
  return (
    (user ?
      <div>
        <Header user={user} />
        <div className="flex w-full ">
          <Pagination />
          <div className="w-full bg-gray-100 " style={{ "height": "90vh" }}>
            <div className="flex flex-col w-full h-full px-4 m-auto mx-auto bg-gray-200 bg-center bg-no-repeat bg-cover opacity-100 font-poppins">
              <div className="flex items-center m-auto mt-8 bg-blue-600 rounded-full w-80 h-80">
                <img
                  alt="..."
                  className="mx-auto rounded-full w-80 h-80"
                  src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
                />
              </div>
              <div className="flex items-center justify-between px-4 pt-12 m-auto">
                <div className="flex items-center ">
                  <div className="flex flex-col pl-4 leading-none ">
                    <h3 className="w-full text-2xl font-bold uppercase">
                      Name :{user ? user.name : null}
                    </h3>
                    <p className="mt-3 text-xl font-semibold text-gray-600">
                      Email : {user ? user.email : null}
                    </p>
                    <p className="pt-1 text-lg font-light text-gray-700">
                      Role : {user ? user.role : null}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full px-4 pt-12"></div>
              <div className="flex flex-col w-full px-4 pt-12">
                <p className="font-semibold text-gray-600">
                  {user ? user.school : null}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      : null)

  );
}
