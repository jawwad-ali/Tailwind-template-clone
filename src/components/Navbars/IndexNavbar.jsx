import React from "react";
import { DocumentTextIcon } from "@heroicons/react/outline";
import { ArrowDownIcon } from "@heroicons/react/solid";

const IndexNavbar = () => {
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-5 navbar-expand-lg bg-white shadow">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Left Column */}
          <div className="flex flex-row justify-between w-auto ">
            <a className="ml-2 font-bold uppercase pl-2 text-sm text-blueGray-700 mr-4 md:ml-2">
              NOTUS REACT
            </a>

            <button className="sm:btn hidden">
              <DocumentTextIcon className="h-6 w-6 font-bold inline-block text-blueGray-400 far fa-file-alt text-lg leading-lg ml-2" />
              docs
            </button>
          </div>

          {/* Right Column */}
          <div className="hidden lg:flex justify-between px-4 w-auto items-center">
            <a
              className="text-blueGray-700 hover:text-blueGray-500 px-3 uppercase text-xs font-bold"
              href="#"
            >
              demo pages
            </a>
            <img
              className="h-5 w-5 mx-3 text-blueGray-700 cursor-pointer hover:bg-black"
              src="https://freeiconshop.com/wp-content/uploads/edd/facebook-outline.png"
              alt="facebook"
            />

            <img
              className="h-5 w-5 mx-3 text-blueGray-700 cursor-pointer hover:bg-black"
              src="https://freeiconshop.com/wp-content/uploads/edd/twitter-outline.png"
              alt="twitter"
            />

            <img
              className="h-5 w-5 mx-3 text-blueGray-700 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png"
              alt="github"
            />

            <div className="flex items-center ml-4">
              <button className="navBtn font-bold">
                <ArrowDownIcon className="w-6 h-4 inline-block" />
                Download
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default IndexNavbar;
