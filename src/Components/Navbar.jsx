import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRightLong,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="w-[1380px] mx-auto flex items-center justify-between ">
        <div className="flex gap-[24px] items-center py-[20px]">
          <Link to="/">
            <img src={logo} alt="miro logo" />
          </Link>
          <ul className="flex items-center gap-[16px] font-Helvetica  font-normal text-[16px] leading-[26px] text-[#050038] ">
            <li className="flex gap-[13.19px] items-center  ">
              <Link to="/product">Product</Link>
              <FontAwesomeIcon icon={faAngleDown} />
            </li>
            <li className="flex gap-[13.19px] items-center  ">
              <Link to="/solutions">Solutions</Link>
              <FontAwesomeIcon icon={faAngleDown} />
            </li>
            <li className="flex gap-[13.19px] items-center  ">
              <Link to="/resources">Resources</Link>
              <FontAwesomeIcon icon={faAngleDown} />
            </li>
            <li>
              <Link to="/enterprise">Enterprise</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[13px]  ">
          <div className="flex  gap-[8px] items-center text-[#050038] uppercase  ">
            <FontAwesomeIcon icon={faGlobe} />
            <Link to="#">en</Link>
          </div>
          <div className="font-inter font-normal text-[16px] leading-[24px] text-[#050038]  flex items-center gap-[24px] ">
            <Link to="#">Contact Sales</Link>
            <Link to="#">Login</Link>
          </div>
          <div>
            <button className=" w-[151.77px] h-[50px] bg-[#4262FF] rounded-[24px] text-white   ">
              Sign up free
              <FontAwesomeIcon icon={faArrowRightLong} className="ml-[5px] " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
