import React from "react";
import { useAuth } from "../../contexts/auth";
export default function TeacherDetails() {
  const { user } = useAuth();
  return (
    <div className="w-3/4 h-full p-8 ">
    <img
      className="m-auto mt-12 mb-20 rounded-lg"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <div className="flex flex-col justify-center">
      <div className="flex justify-between w-1/5 m-auto mb-4">
        <p>Name:</p>
        <strong>{user.name}</strong>
      </div>
      <div className="flex justify-between w-1/5 m-auto mb-4">
        <p>National ID:</p>
        <strong>{user.nid}</strong>
      </div>
      <div className="flex justify-between w-1/5 m-auto mb-4">
        <p>Employee ID:</p>
        <strong>{user.eid}</strong>
      </div>
      <div className="flex justify-between w-1/5 m-auto mb-4">
        <p>Qualification:</p>
        <strong>{user.qualification}</strong>
      </div>
      <div className="flex justify-between w-1/5 m-auto mb-4">
        <p>School</p>
        <strong>{user.sid}</strong>
      </div>
    </div>
  </div>
  );
}
