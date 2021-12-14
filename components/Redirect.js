import React from 'react'
// import Index from './TeacherDashboard/Index'
import TeacherProfile from '../components/TeacherDashboard/TeacherProfile'
import ManagerDashboard from './ManagerDashboard/ManagerDashboard'
import useResouce from '../hooks/useResource'
import Loading from '../components/utils/Loading'
export default function Redirect ({ user }) {
  const { resources, loading } = useResouce(user)
  return (
    <div className='flex w-full h-full'>
      {user.role == 'teacher' ? (
        <TeacherProfile />
      ) : user.role == 'manager' ? (
        loading ? <Loading /> :
          <ManagerDashboard resources={resources} />
      ) : (
        false
      )}
    </div>
  )
}
