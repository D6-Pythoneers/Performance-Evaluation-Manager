import React from "react";
import TeacherContactInformationForm from "./TeacherContactInformationForm";
import TeacherDetails from "./TeacherDetails";
export default function TeacherProfile() {

  return (
    <div data-cy="teacher-profile" className="flex w-full ">
        <TeacherDetails />
        <TeacherContactInformationForm />
    </div>
  );
}
