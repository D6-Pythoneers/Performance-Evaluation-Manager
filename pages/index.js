import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/auth";

import Dashboard from "./dashboard";
export default function Home () {
  const { user } = useAuth();

  return <>{user ? <Dashboard /> : <LoginForm />}</>;
}

