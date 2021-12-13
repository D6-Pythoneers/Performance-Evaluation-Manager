import React from "react";
import { useAuth } from "../contexts/auth";
import Index from "./TeacherDashboard/Index";
import Header from "./Header";
import ManagerDashboard from "./ManagerDashboard/ManagerDashboard";
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
