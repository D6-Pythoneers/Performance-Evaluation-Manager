import React from 'react'
// import Index from './TeacherDashboard/Index'
import TeacherProfile from '../components/TeacherDashboard/TeacherProfile'
import ManagerDashboard from './ManagerDashboard/ManagerDashboard'

export default function Redirect ({ user }) {
  return (
    <div className='flex w-full h-full'>
      {user.role == 'teacher' ? (
        <TeacherProfile />
      ) : user.role == 'manager' ? (
        <ManagerDashboard />
      ) : (
        false
      )}
    </div>
  )
}
