import React from "react";
import { useAuth } from "../contexts/auth";
import Index from "./TeacherDashboard/Index";
import ManagerDashboard from "./ManagerDashboard/Index";
import Header from "./Header";
export default function Redirect() {
  const { user } = useAuth();
  return (
    <div className="flex w-full h-full">
      {user.role == "teacher" ? (
        <Index />
      ) : user.role == "manager" ? (
        <ManagerDashboard />
      ) : (
        false
      )}
    </div>
  );
}
