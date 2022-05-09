const ServicesDetailsText = ({
  img,
  title,
  text,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
}) => {
  return (
    <>
      <img
        className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
        src={img}
        alt={title}
      />
      <h3 className="capitalize text-3xl font-semibold">{title}</h3>
      <p className="text-blueGray-600 text-lg font-light my-5 pr-6 leading-relaxed">
        {text}
      </p>
      <div className="mt-2 inline-block">
        <button className="bg-white text-xs mr-2 mb-3 font-semibold py-1 px-2 uppercase text-blueGray-500 rounded-full">
          {btn1}
        </button>
        <button className="bg-white text-xs mr-2 font-semibold py-1 px-2 uppercase text-blueGray-500 rounded-full">
          {btn2}
        </button> 
        <button className="bg-white text-xs mr-2 font-semibold py-1 px-2 uppercase text-blueGray-500 rounded-full">
          {btn3}
        </button>
        <button className="bg-white text-xs mr-2 font-semibold py-1 px-2 uppercase text-blueGray-500 rounded-full">
          {btn4}
        </button>
      </div>
      <div className="mt-0 sm:mt-2 inline-block">
        <button className="bg-white text-xs mr-2 font-semibold py-1 px-2 uppercase text-blueGray-500 rounded-full">
          {btn5}
        </button>
        <button className="bg-white text-xs mr-2 mb-3 font-semibold py-1 px-2 uppercase text-blueGray-500 rounded-full">
          {btn6}
        </button>
        <button className="bg-white text-xs mr-2 font-semibold py-1 px-2 uppercase text-blueGray-500 rounded-full">
          {btn7}
        </button>
        <button className="bg-white text-xs mr-2 font-semibold py-1 px-2 uppercase text-blueGray-500 rounded-full">
          {btn8}
        </button>
      </div>
    </>
  );
};

export default ServicesDetailsText;
