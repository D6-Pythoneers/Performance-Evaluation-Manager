import React from 'react'
import { useAuth } from '../contexts/auth'
import ManagerDashboard from './ManagerDashboard/ManagerDashboard'
import Index from './TeacherDashboard/Index'
import School from '../pages/api/School'
export default function Redirect() {
  const { user } = useAuth()
  const school = new School(user)
  console.log(school)
  
  return (
    <div className='flex w-full h-full'>
      {user.role == 'teacher' ? (
        <Index />
      ) : user.role == 'manager' ? (
        <ManagerDashboard school={school} />
      ) : (
        false
      )}
    </div>
  )
}
