import React from "react";
import useResouce from "../hooks/useResource";
import Pagination from "../components/TeacherDashboard/Pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/auth";
import TeacherDashboard from "../components/TeacherDashboard/TeacherDashboard";
import ManagerDashboard from "../components/ManagerDashboard/ManagerDashboard";
import Loading from "../components/utils/Loading";
export default function Dashboard() {
  const { user } = useAuth();
  const { resources, loading } = useResouce(user)

  return (
    <div>
      <Header user={user} />
      {!loading ? (
        <div className="flex w-full ">
          <Pagination />
          <div className="flex w-full h-full">
            {user.role == "teacher" ? (
              loading ? (
                <Loading />
              ) : (
                <TeacherDashboard resources={resources} />
              )
            ) : user.role == "manager" ? (
              loading ? (
                <Loading />
              ) : (
                <ManagerDashboard resources={resources} />
              )
            ) : (
              false
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <Footer />
    </div>
  );
}
