import Header from "../components/SharedComponents/Header";
import SideBar from "../components/SharedComponents/SideBar";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 border border-black">
      <Header />
      <SideBar />
    </div>
  );
}
