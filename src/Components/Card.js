import React, { useState } from "react";
import Popup from "./Popup";
const Card = (props) => {
  const [popup, setPopup] = useState(false);
  const [project, setProject] = useState();
  const handleClick = () => {
    setPopup(!popup);
    console.log(popup);
    setProject(props.project);
  };
  return (
    <>
      <div
        className=" object-cover flex  justify-center overflow-hidden"
        onClick={handleClick}
      >
        <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className=" h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img
              src={require(`../Project/${props.project.Name}.png`)}
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-150"
              alt=""
            />
          </div>
          <div className="absolute bottom-0  m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
              {props.project.Name}
            </h1>
            <h1 className="text-sm font-light text-gray-200 shadow-xl">
              {props.project.Description}
            </h1>
          </div>
        </div>
      </div>
      {popup && (
        <Popup
          project={project}
          className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-96 bg-white shadow-lg rounded-lg"
        />
      )}
    </>
  );
};

export default Card;
