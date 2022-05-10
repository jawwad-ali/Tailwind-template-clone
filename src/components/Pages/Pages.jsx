import React from "react";

const Pages = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-10/12 md:w-6/12 mx-auto text-center mt-48">
          <h2 className="font-semibold text-4xl mb-4">
            Beautiful Example Pages
          </h2>
          <p className="font-light text-blueGray-500 text-lg pb-4 leading-relaxed">
            Notus React is a completly new product built using our past
            experience in web templates. Take the examples we made for you and
            start playing with them.
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-around mb-20 mt-20 container mx-auto ">
          <div className="lg:w-1/3 flex flex-col justify-center text-center px-4 hover:-mt-4 ease-linear cursor-pointer transition-all duration-150">
            <h5 className="text-xl font-semibold pb-4 text-center">
              Login Page
            </h5>
            <img
              src="https://demos.creative-tim.com/notus-react/static/media/login.9c1ecd37.jpg"
              className="align-middle border-none max-w-full h-auto rounded-lg md:pb-4 px-4"
              alt=""
            />
          </div>
          <div className="lg:w-1/3 flex flex-col hover:-mt-4 justify-center text-center px-4 cursor-pointer ease-linear transition-all duration-150">
            <h5 className="text-xl font-semibold pb-4 text-center ">
              Profile Page
            </h5>
            <img
              src="https://demos.creative-tim.com/notus-react/static/media/profile.c62f8a5b.jpg"
              className="align-middle border-none max-w-full h-auto rounded-lg pb-4 px-4"
              alt=""
            />
          </div>
          <div className="lg:w-1/3 flex flex-col justify-center hover:-mt-4  text-center px-4 cursor-pointer ease-linear transition-all duration-150">
            <h5 className="text-xl font-semibold pb-4 text-center">
              Landing Page
            </h5>
            <img
              src="https://demos.creative-tim.com/notus-react/static/media/landing.8150f1b0.jpg"
              className="align-middle border-none max-w-full h-auto rounded-lg pb-4 px-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
