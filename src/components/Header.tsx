"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react"

export default function Navbar() {
  const [state, setState] = React.useState(false)

  const menus = [
    { title: "Home", path: "/" },
    { title: "Blogs", path: "/blogs" },
    { title: "Insights", path: "/insights" },
    { title: "Tools", path: "/tools" },
  ]

  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center gap-10 max-w-screen-xl mx-auto md:flex md:px-8 md:justify-center">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-blue-600">AAWAS INDIA</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            {/* <form className="flex items-center  space-x-2 border rounded-md p-2">
              <Search className="h-5 w-5 flex-none text-gray-300" />
              <input
                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}