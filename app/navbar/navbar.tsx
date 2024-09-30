
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Navbar() {
const session = await getServerSession();
  return (

      <div className="flex justify-between h-16 px-10 shadow items-center">
        <div className="flex items-center space-x-8">
          <Link href="/">
          <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">
            Unibitsoft
          </h1>
          </Link>
          <div className="hidden md:flex justify-around space-x-4">
            <Link href="/" className="hover:text-indigo-600 text-gray-700">
              Home
            </Link>
            <Link href="/newform" className="hover:text-indigo-600 text-gray-700">
              Posts
            </Link>
            <Link href="/?comments" className="hover:text-indigo-600 text-gray-700">
              Comments
            </Link>
            <Link href="/?albums" className="hover:text-indigo-600 text-gray-700">
              Albums
            </Link>
            <Link href="/?photos" className="hover:text-indigo-600 text-gray-700">
              Photos
            </Link>
            <Link href="/?users" className="hover:text-indigo-600 text-gray-700">
              Users
            </Link>
            <Link href="/?todos" className="hover:text-indigo-600 text-gray-700">
              Todos
            </Link>
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

  )
}
