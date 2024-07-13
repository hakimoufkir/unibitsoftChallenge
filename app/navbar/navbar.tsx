
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Navbar() {
const session = await getServerSession();
  return (
    <nav>
    <div className="">
      <div className="flex justify-between h-16 px-10 shadow items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">
            Unibitsoft
          </h1>
          <div className="hidden md:flex justify-around space-x-4">
            <a href="#" className="hover:text-indigo-600 text-gray-700">
              Home
            </a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">
              Posts
            </a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">
              Comments
            </a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">
              Albums
            </a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">
              Photos
            </a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">
              Users
            </a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">
              Todos
            </a>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          {!session && (
            <div>
              <Link href="/login" className="text-gray-800 text-sm">
                LOGIN
              </Link>
              <Link
                href="/register"
                className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
              >
                SIGNUP
              </Link>
            </div>
          )}
          {!!session && (
            <Link href="/logout" className="bg-red-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
              LOGOUT
            </Link>
          )}
        </div>
      </div>
    </div>
  </nav>
  )
}
