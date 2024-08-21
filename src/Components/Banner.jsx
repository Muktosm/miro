import React from "react";
import svg from '../assets/svg.png'
import getapp from '../assets/getapp.png'
import capterra from '../assets/capterra.png'
import banner from "../assets/banner.png";
import walmart from '../assets/walmart.png'
import cisco from '../assets/cisco.png'
import volvo from '../assets/volvo.png'
import deloitte from '../assets/deloitte.png'
import okta from '../assets/okta.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-[60px] mx-[120px]   ">
        <div className="ml-[40px]   ">
          <h1 className="font-inter font-bold text-[48px] leading-[56px] text-[#050038] pb-[16px] ">
            Take ideas from <br /> better to best
          </h1>
          <p className="font-Helvetica font-normal text-[16px] leading-[26px] text-[#050038]  ">
            Miro is your team's visual platform to connect, <br /> collaborate,
            and create — together.
          </p>
          <div className="mt-[32px] mb-[41px]    ">
            <form action="">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-[440px] h-[51px] border-[2px] outline-none border-[#9B99AF] rounded-[32px] pl-[25px] placeholder:text-[#5F5C80] "
              />
              <button
                type="submit"
                className="w-[440px] h-[51px]  rounded-[32px] bg-[#4262FF] mt-[10px] mb-[7px] text-white font-Helvetica font-normal text-[18px] leading-[27px]  "
              >
                Sign up free →
              </button>
              <p className="font-Helvetica font-normal text-[14px] leading-[20px] text-[rgba(5,0,56,0.4)] ">
                Collaborate with your team within minutes
              </p>
            </form>
          </div>
          <div className="w-[360px] h-[60px] bg-[#F5F5F7] rounded-[8px] p-[14px] flex items-center justify-between  ">
            <div>
              <ul className="text-[#FF9D48]   ">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
              </ul>
              <p className="font-Helvetica font-normal text-[11px] leading-[15px] text-[#050038]  ">
                Based on 5149+ reviews:
              </p>
            </div>
            <div className="flex w-[185.36px] justify-evenly">
              <img src={svg} alt="" />
              <img src={getapp} alt="" />
              <img src={capterra} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src={banner} alt="Banner image" />
        </div>
      </div>
      <div className=" mx-[160px] my-[60px] ">
        <p className="font-inter font-normal text-[18px] leading-[24px] text-[rgba(5,0,56,0.6)] text-center mb-[48px]   ">
          Trusted by 45M+ users
        </p>
        <div className="flex justify-evenly ">
          <img src={walmart} alt="" />
          <img src={cisco} alt="" />
          <img src={volvo} alt="" />
          <img src={deloitte} alt="" />
          <img src={okta} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
