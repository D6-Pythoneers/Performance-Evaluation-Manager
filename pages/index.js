import Pagination from "../components/TeacherDashboard/Pagination";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/auth";
import Footer from "../components/Footer";

import Dashboard from "./dashboard";
export default function Home() {
  const { user } = useAuth();

  return <>{user ? <Dashboard /> : <LoginForm />}</>;
}
