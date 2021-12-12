import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import EvalutionTable from '../components/evalutionTable'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <Head>
        <title>Performance Evaluation System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header>
        <img className="h-24 min-h-full" src='https://bohatala.com/wp-content/uploads/2015/08/performance-management.jpg'></img>
      </header>  */}
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <EvalutionTable/>
      </main>
      {/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <LoginForm/>
      </main> */}

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        &copy; Performance Evaluation System. All rights reserved.
      </footer> */}
    </div>
  )
}
