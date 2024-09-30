"use client"
import { useRouter } from "next/navigation";
import  '../globals.css'
import { FormEvent } from "react";
export default function Form() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userId = formData.get("userId");
    const id = formData.get("id");
    const title = formData.get("title");
    const body = formData.get("body");

    try {
      const response = await fetch("/api/posts/new", {
        method: "POST", // Assuming you want to POST data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId,id,title, body }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      router.push("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error, e.g., display an error message to the user
    }
  };
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="w-full max-w-xs ">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >



              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="userId"
                >
                  userId
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="userId"
                  id="userId"
                  type="text"
                  placeholder="userId"
                />
              </div>




              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="id"
                >
                  id
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="id"
                  id="id"
                  type="text"
                  placeholder="id"
                />
              </div>





              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="title"
                  id="title"
                  type="text"
                  placeholder="title"
                />
              </div>




              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="body"
                >
                  body
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  // className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="body"
                  type="text"
                  name="body"
                  placeholder="body"
                />
                {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  create
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
