import React from "react";
import TeacherContactInformationForm from "./TeacherContactInformationForm";
import TeacherDetails from "./TeacherDetails";
export default function TeacherProfile() {
  return (
    <div className="flex w-full ">
        <TeacherDetails />
        <TeacherContactInformationForm />
    </div>
  );
}
