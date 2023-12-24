import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className=" ">
        <button className="bg-white  text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          <FaPlay fill="black" className="inline mb-1 mr-2" />
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
          <IoIosInformationCircleOutline className="inline mb-1 mr-2 " />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
