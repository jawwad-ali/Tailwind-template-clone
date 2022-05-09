import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className=" flex flex-wrap relative">
        <div className="w-full ">
          <div className="container mx-auto flex mt-24 ">
            {/* left Col */}
            <div className="lg:w-6/12 md:w-8/12 lg:mt-28 mt-12 md:mt-5 flex flex-col pt-2 px-4">
              <h1 className="font-semibold text-4xl text-blueGray-600 ">
                Notus React - A beautiful extension for Tailwind CSS.
              </h1>

              <p className="pt-4 text-lg text-blueGray-500 leading-relaxed">
                Notus React is Free and Open Source. It does not change any of
                the CSS from{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  Tailwind CSS.
                </a>{" "}
                It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>

              <div className="flex items-start mt-8 ">
                <button className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                  get started
                </button>
                <button className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                  github star
                </button>
              </div>
            </div>

            {/* Right Col */}
            <img
              src="https://demos.creative-tim.com/notus-react/static/media/pattern_react.01996482.png"
              alt=""
              className="-mt-48 absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -pt-56 sm:mt-0 w-10/12 max-h-860px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
