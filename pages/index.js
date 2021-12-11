import Head from "next/head";
import TeacherProfile from "../components/TeacherProfile";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
export default function Home() {
  return (
    <div className="w-3/4 m-auto">
      <Header />
      <div className="flex">
        <Pagination />
        <TeacherProfile />
      </div>
    </div>
  );
}
