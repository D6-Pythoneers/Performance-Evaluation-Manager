import React from "react";
import useResouce from "../hooks/useResource";
import Pagination from "../components/TeacherDashboard/Pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/auth";
import TeacherDashboard from "../components/TeacherDashboard/TeacherDashboard";
import ManagerDashboard from "../components/ManagerDashboard/ManagerDashboard";
export default function ManagerDB() {
  const { user } = useAuth();
  const { resources } = useResouce();
  console.log(resources);
  return (
    <div>
      <Header user={user} />
      <div className="flex w-full ">
        <Pagination />
        <div className="w-full bg-gray-100">
          {user ? (
            user.role == "teacher" ? (
              <TeacherDashboard />
            ) : user.role == "manager" ? (
              <ManagerDashboard />
            ) : undefined
          ) : undefined}
        </div>
      </div>
      <Footer />
    </div>
  );
}
