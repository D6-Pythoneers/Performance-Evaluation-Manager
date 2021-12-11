import TeacherProfile from "../components/TeacherProfile";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/auth";
export default function Home() {
  const { user } = useAuth();
  return (
    <div className="w-3/4 min-h-screen m-auto">
      <Header />
      <div className="flex">
        {user ? (
          <>
            <Pagination />
            <TeacherProfile {...user}/>
          </>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
}
