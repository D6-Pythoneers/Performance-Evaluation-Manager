import TeacherProfile from "../components/TeacherDashboard/TeacherProfile";
import Pagination from "../components/TeacherDashboard/Pagination";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Redirect from "../components/Redirect";
import Footer from "../components/Footer";
export default function Home() {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <div >
          <Header />
          <div className="flex w-full ">
            <Pagination />
            <div className="w-full bg-gray-100">
              <Redirect />
            </div>
          </div>

          <Footer />
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
// <div className="min-h-screen bg-gray-100">
// <Header />
// <main className="flex">
//   <SideBar />
//   <div className="flex w-full ">
//     <UserDetails />
//     <UserContactInformationForm/>
//   </div>
// </main>

// <Footer />
// </div>
