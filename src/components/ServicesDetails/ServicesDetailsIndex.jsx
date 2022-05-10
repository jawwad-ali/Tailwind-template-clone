import React from "react";
import ServicesDetailsText from "./ServicesDetailsText";
import CssComp from "../../assets/img/css_comp.PNG";
import Docs from "../../assets/img/docs.PNG";
import Js from "../../assets/img/js.PNG";
import Pages from "../../assets/img/pages.PNG";
import Github from "../../assets/img/github.png";

const ServicesIndex = () => {
  return (
    <>
      <div className="w-full bg-blueGray-100 overflow-hidden">
        <div className="w-full ml-auto mr-auto container mx-auto flex flex-wrap pb-12">
          {/* Left Col */}
          <div className="md:w-4/12 sm:mx-24 mx-12">
            <ServicesDetailsText
              img={CssComp}
              title="CSS Components"
              text="Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can have different colours."
              btn1="buttons"
              btn2="inputs"
              btn3="labels"
              btn4="menus"
              btn5="navbars"
              btn6="pagination"
              btn7="progressbars"
              btn8="typography"
            />
          </div>

          {/* Right Col */}
          <div className="w-full md:w-5/12 px-4 pb-48 mr-auto ml-auto mt-56 items-center">
            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <img
                alt="..."
                src={Github}
                className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
              />
              <img
                alt="..."
                src="https://demos.creative-tim.com/notus-react/static/media/component-profile-card.52a3ee76.png"
                className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
              />
              <img
                alt="..."
                src="https://demos.creative-tim.com/notus-react/static/media/component-info-card.d19a4464.png"
                className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
              />
              <img
                alt="..."
                src="https://demos.creative-tim.com/notus-react/static/media/component-info-2.5212a3a6.png"
                className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
              />
              <img
                alt="..."
                src="https://demos.creative-tim.com/notus-react/static/media/component-menu.418bd949.png"
                className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
              />
              <img
                alt="..."
                src="data:image/png;base64,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"
                className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
              />
            </div>
          </div>
        </div>

        {/* section 2 */}

        <div className="w-full ml-auto mr-auto container mx-auto flex flex-wrap pb-12 mt-0 md:mt-56">
          <div className="w-full flex flex-col lg:flex-row md:w-6/12 lg:4/12 md:ml-10 pb-48 justify-center px-4 sm:px-0">
            <div className="relative flex flex-col min-w-0 mb-6 mt-12 md:-mx-2 md:mt-0 lg:w-5/12 px-4 md:px-8 md:py-4 lg:px-0">
              <div className="flex flex-col items-center w-full justify-center rounded-lg mb-8 bg-red-600 text-center">
                <img
                  className="bg-white rounded-full w-16 mt-8"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                  alt=""
                />
                <p className="text-white text-lg font-semibold pb-8 pt-4">
                  Sevlte
                </p>
              </div>

              <div className="flex flex-col items-center w-full justify-center rounded-lg bg-lightBlue-500 mb-8 text-center">
                <img
                  className="bg-white rounded-full w-16 mt-8"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                  alt=""
                />
                <p className="text-white text-lg font-semibold pb-8 pt-4">
                  React
                </p>
              </div>

              <div className="flex flex-col items-center w-full justify-center rounded-lg bg-blueGray-700 mb-8 text-center">
                <img
                  className="bg-white rounded-full w-16 mt-8"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                  alt=""
                />
                <p className="text-white text-lg font-semibold pb-8 pt-4">
                  NextJS
                </p>
              </div>
            </div>

            {/*  */}
            <div className="relative flex flex-col min-w-0 px-4 pt-12 mb-6 lg:ml-12 -mt-16 md:-mt-12 lg:mt-12 md:ml-0 lg:w-5/12 lg:px-0 w-full md:px-6 md:py-4 md:-mx-2">
              <div className="flex flex-col items-center w-full  justify-center rounded-lg bg-yellow-500 mb-8 text-center">
                <img 
                  className="bg-white rounded-full w-16 mt-8"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                  alt=""
                />
                <p className="text-white text-lg font-semibold pb-8 pt-4">
                  JavaScript
                </p> 
              </div>

              <div className="flex flex-col items-center w-full justify-center  rounded-lg bg-red-700 mb-8 text-center">
                <img
                  className="bg-white rounded-full w-16 mt-8"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                  alt=""
                />
                <p className="text-white text-lg font-semibold pb-8 pt-4">
                  Angular
                </p>
              </div>

              <div className="flex flex-col items-center w-full justify-center  rounded-lg bg-emerald-500  mb-8 text-center">
                <img
                  className="bg-white rounded-full w-16 mt-8"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                  alt=""
                />
                <p className="text-white text-lg font-semibold pb-8 pt-4">
                  Vue.js
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 -mt-40 md:mt-40 lg:mt-0 lg:w-4/12 ml-9 md:ml-14">
            <div className=" mt-28 py-4 px-3">
              <ServicesDetailsText
                img={Js}
                title="Javascript Components"
                text="In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users."
                text2="We created a set of Components that are dynamic and come to help you."
                btn1="alerts"
                btn2="dropdowns"
                btn3="menus"
                btn4="modals"
                btn5="navbars"
                btn6="popovers"
                btn7="tabs"
                btn8="tooltips"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesIndex;
