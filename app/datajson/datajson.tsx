"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Datajson() {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="mt-16 max-w-screen-xl">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>         
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              title
            </th>
            <th scope="col" className="px-6 py-3">
              body
            </th>
            <th scope="col" className="px-6 py-3">
              edit
            </th>
            <th scope="col" className="px-6 py-3">
              delete
            </th>
          </tr>
        </thead>
        <tbody>
          {allPosts.map((item: any) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.title}</td>
              <td className="px-6 py-4">{item.body}</td>
              <td className="px-6 py-4">
                <Link href={`/editform?id=${item.id}`}>                
                <svg
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                </Link>
              </td>
              <td className="px-6 py-4">
                <svg
                  className="h-8 w-8 text-red-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <line x1="4" y1="7" x2="20" y2="7" />{" "}
                  <line x1="10" y1="11" x2="10" y2="17" />{" "}
                  <line x1="14" y1="11" x2="14" y2="17" />{" "}
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />{" "}
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
