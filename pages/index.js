import Header from "../components/SharedComponents/Header";
import SideBar from "../components/SharedComponents/SideBar";
import Footer from "../components/SharedComponents/Footer";
import UserDetails from "../components/UserProfile/UserDetails";
import UserContactInformationForm from "../components/UserProfile/UserContactInformationForm";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex">
        <SideBar />
        <div className="flex w-full ">
          <UserDetails />
          <UserContactInformationForm/>
        </div>
      </main>

      <Footer />
    </div>
  );
}
