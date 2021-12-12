import Header from "../components/SharedComponents/Header";
import SideBar from "../components/SharedComponents/SideBar";
import Footer from "../components/SharedComponents/Footer";
import UserDetails from "../components/UserProfile/UserDetails";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 border border-black">
      <Header />
      <main className="flex">
        <SideBar />
        <div className="w-full border-4 border-yellow-600">
          <UserDetails />
        </div>
      </main>

      <Footer />
    </div>
  );
}
