import Pagination from '../components/TeacherDashboard/Pagination'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'
import { useEffect } from 'react'
import Redirect from '../components/Redirect'
import Footer from '../components/Footer'
export default function Home () {
  const { user } = useAuth()
  return (
    <>
      {user ? (
        <div>
          <Header user={user} />
          <div className='flex w-full '>
            <Pagination />
            <div className='w-full bg-gray-100'>
              <Redirect user={user}/>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  )
}
