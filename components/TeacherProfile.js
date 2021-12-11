import React from "react";
import TeacherContactInformationForm from "./TeacherContactInformationForm";
import TeacherDetails from "./TeacherDetails";
import Pagination from "./Pagination";
export default function TeacherProfile() {
  return (
    <div className="flex w-3/4 border border-red-700">
      <Pagination/>
      <div className="flex">
        <TeacherDetails />
        <TeacherContactInformationForm />
      </div>
    </div>
  );
}
