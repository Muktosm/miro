import React from "react";
import connect from "../assets/connect.png";
import section from '../assets/section.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Connect = () => {
  return (
    <>
      <div className="flex items-center my-[60px] mx-[60px] gap-[115px]   ">
        <div>
          <img src={connect} alt="Connect page image" className="w-[550px]   " />
        </div>
        <div className=" ">
          <h3 className="font-inter font-bold text-[48px] leading-[56px] text-[#050038]    ">
            Connect <br /> your tools, <br /> close your tabs
          </h3>
          <p className="mt-[28px] mb-[52px] font-inter font-normal text-[18px] leading-[24px] text-[rgba(5,0,56,0.6)] ">
            Whether you want to edit your Google Docs, resolve <br /> Jira issues, or
            collaborate over Zoom, Miro has 100+ <br /> integrations with tools you
            already use and love.
          </p>
          <button className="flex gap-[5px] items-center text-[#4262FF]  ">
            Learn more
            <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
          </div>
          <div>
              <img src= {section} alt="Section image." />
          </div>
    </>
  );
};

export default Connect;
