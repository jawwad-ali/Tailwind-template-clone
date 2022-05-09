import React from "react";
import CssComp from "../../assets/img/css_comp.PNG";
import Docs from "../../assets/img/docs.PNG";
import Js from "../../assets/img/js.PNG";
import Pages from "../../assets/img/pages.PNG";

const Services = () => {
  return (
    <>
      <section className="lg:mt-60 mt-24 pb-40 relative bg-blueGray-100 ">
        {/* Bg */}
        <div
          className="-mt-20 top-0 left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        > 
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Left Col */}

            <div className="lg:w-4/12 ml-auto mr-auto -mt-24 md:w-6/12 w-8/12">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full  align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px sm:-top-[68px] -top-[46px]  "
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome project
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote> 
              </div>
            </div>
            {/* Right Col */}
            <div className="w-full sm:w-6/12 flex flex-wrap mt-12">
              <div className="w-full sm:w-1/2 px-12 flex flex-col items-start">
                <img src={CssComp} alt="css compo" className="pb-2" />
                <h4 className="mb-1 capitalize text-xl font-semibold ">
                  css components
                </h4>
                <p className="mb-4 text-blueGray-500">
                  Notus React comes with a huge number of Fully Coded CSS
                  components. 
                </p> 
              </div>
              <div className="w-full md:w-1/2 flex px-12 sm:px-6 flex-col items-start">
                <img src={Pages} alt="pagess" />
                <h4 className=" capitalize text-xl font-semibold mb-1">
                  Pages 
                </h4>
                <p className="mb-4 text-blueGray-500">
                  This extension also comes with 3 sample pages. They are fully
                  coded so you can start working instantly.
                </p>
              </div>
 
              <div className="w-full md:w-1/2 px-12 flex flex-col items-start">
                <img src={Js} alt="pagess" className="pb-2" />
                <h4 className=" capitalize text-xl font-semibold mb-1">
                  JavaScript Components
                </h4>
                <p className="mb-4 text-blueGray-500">
                  We also feature many dynamic components for React, NextJS, Vue
                  and Angular.
                </p>
              </div> 
              <div className="w-full md:w-1/2 flex px-12 sm:px-6 flex-col items-start ">
                <img src={Docs} alt="docs" />
                <h4 className="py-4 capitalize text-xl font-semibold mb-1">
                  Documentation
                </h4>
                <p className="mb-4 text-blueGray-500">
                  Built by developers for developers. You will love how easy is
                  to to work with Notus React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
