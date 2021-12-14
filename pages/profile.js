import React from "react";
import TeacherContactInformationForm from "../components/TeacherDashboard/TeacherContactInformationForm";
import TeacherDetails from "../components//TeacherDashboard/TeacherDetails";
import { useAuth } from "../contexts/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pagination from "../components/TeacherDashboard/Pagination";
export default function TeacherProfile() {
    const {user} = useAuth()
  return (
    <div>
      <Header user={user} />
      <div className="flex w-full ">
        <Pagination />
        <div className="w-full bg-gray-100">
            {}
          <div className="flex w-full ">
            <TeacherDetails />
            <TeacherContactInformationForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
