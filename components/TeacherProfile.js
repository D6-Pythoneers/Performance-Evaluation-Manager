import React from "react";
import TeacherContactInformationForm from "./TeacherContactInformationForm";
import TeacherDetails from "./TeacherDetails";
export default function TeacherProfile() {
  return (
    <div className="flex w-3/4 border border-red-700">
        <TeacherDetails/>
        <TeacherContactInformationForm/>
    </div>
  );
}
