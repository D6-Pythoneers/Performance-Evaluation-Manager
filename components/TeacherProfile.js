import React from "react";
import TeacherContactInformationForm from "./TeacherContactInformationForm";
import TeacherDetails from "./TeacherDetails";
import { useEffect } from "react";
import { useAuth } from "../contexts/auth";
export default function TeacherProfile() {

  return (
    <div className="flex w-full ">
        <TeacherDetails />
        <TeacherContactInformationForm />
    </div>
  );
}
