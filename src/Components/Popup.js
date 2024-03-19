import React, { useRef, useEffect, useState } from "react";

const Popup = (props) => {
  const popupRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black shadow-lg rounded-lg w-full max-w-md md:w-max md:max-w-2xl h-max max-h-96 overflow-auto opacity-100"
      ref={popupRef}
      style={{ scrollbarWidth: "thin" }}
    >
      <style>{`
        /* WebKit Scrollbar */
        ::-webkit-scrollbar {
          width: 8px; /* Adjust as needed */
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: black; /* Change scrollbar track color */
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: gray; /* Change scrollbar handle color */
          border-radius: 4px; /* Add border radius to scrollbar handle */
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: darkgray; /* Change scrollbar handle color on hover */
        }
      `}</style>
      <div className="heading text-center font-bold text-4xl m-5 text-white ">
        {props.project.Name}
      </div>
      <div className="object-contain flex justify-center">
        <img
          src={require(`../Project/${props.project.Name}.png`)}
          className="h-64 object-scale-down"
        />
      </div>
      <div className="mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <p className="text-white text-2xl">{props.project.Description}</p>
        <p className="text-white text-1xl py-2">Languages Used:</p>
        <div className="flex justify-start">
          {props.project.Languages.map((language) => (
            <p className="text-gray-500 text-1xl mr-10">{language}</p>
          ))}
          <br></br>
        </div>
      </div>
      <div className="p-5">
        <a
          href={props.project.Github}
          className="dark:hover:text-white transition-colors duration-75 text-3xl"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Popup;
