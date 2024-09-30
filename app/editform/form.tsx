"use client"
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import  '../globals.css'
import { FormEvent, useEffect, useState } from "react";
export default function Form() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('id');
  console.log(search)
  const [post, setPost] = useState<any>(null);
  const fetchPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${search}`);
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {

      fetchPost();
  
  }, [search]);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget);
  //   const updatedPost = {
  //     userId: formData.get('userId') as string,
  //     id: formData.get('id') as string,
  //     title: formData.get('title') as string,
  //     body: formData.get('body') as string,
  //   };

  //   try {
  //     const response = await fetch(`/api/posts/${search}`, {
  //       method: 'PUT', // or PATCH
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(updatedPost),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     // Handle successful update (e.g., show a success message)
  //     console.log('Post updated successfully');
  //   } catch (error) {
  //     console.error('Error updating post:', error);
  //     // Handle the error (e.g., display an error message to the user)
  //   }
  // };
    return (
      <>
      {
        post &&(
          <div className="flex items-center justify-center h-screen">
          <div className="w-full max-w-xs ">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              // onSubmit={handleSubmit}
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
                  value={post.userId}
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
                  value={post.id}
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
                  value={post.title}
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
                  value={post.body}
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
        )
      }
       
      </>
    );
  };
