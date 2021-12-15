
import Link from 'next/link'
import { useAuth } from "../../contexts/auth";
export default function Pagination() {
  const { logout } = useAuth();
  
  return (
    <div className="flex items-center my-0 bg-gray-100 " >
      
      <div className="flex h-full p-4 my-0 bg-gray-800 w-72 ">
        
        <ul className="flex flex-col justify-between w-full">
          <div>
            <Link href="/dashboard">
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-12 px-4 text-gray-500 rounded-lg hover:bg-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </span>
                <span className="ml-3">Dashboard</span>
               
              </a>
            </li>
            </Link>
            <Link href="/profile">
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-12 px-4 text-gray-500 rounded-lg hover:bg-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
                </span>
                <span className="ml-3">Profile</span>
              </a>
            </li>
            </Link>

          </div>
          
        </ul>
      </div>
    </div>
  );
}
