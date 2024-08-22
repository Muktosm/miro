import React from "react";
import collaboratebg from '../assets/collaboratebg.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Collaborate = () => {
  return (
    <>
      <div className="mt-[24px] mb-[44px] mx-[160px]   ">
        <h2 className="font-inter font-bold text-[48px] leading-[56px] text-[#050038] text-center mb-[12px]  ">
          <br /> Collaborate without <br /> constraints
        </h2>
        <div className="flex items-center justify-between   ">
          <div className="w-[359.95px] px-[24px]  ">
            <h5 className="mt-[25px] mb-[29px] font-inter font-bold text-[24px] leading-[28px] text-[#050038]    ">
              Free forever
            </h5>
            <p className="font-Helvetica font-normal text-[18px] leading-[24px] text-[rgba(5,0,56,0.6)]   ">
              Our free plan gives you unlimited team members, 3 boards, and 300+
              expert-made templates. Signing up with your work email lets you
              bring in your team faster. See our{" "}
              <span className="text-[#4262FF] "> pricing plans</span> for more
              features.
            </p>
          </div>
          <div className="w-[359.95px] px-[24px]  ">
            <h5 className="mt-[25px] mb-[29px] font-inter font-bold text-[24px] leading-[28px] text-[#050038]    ">
              Easy integrations
            </h5>
            <p className="font-Helvetica font-normal text-[18px] leading-[24px] text-[rgba(5,0,56,0.6)]   ">
              Miro has 100+ powerful integrations with tools you already use
              like G Suite, Slack, and Jira, so your workflow is seamless. View
              the full list in our{" "}
              <span className="text-[#4262FF]  ">Marketplace .</span>
            </p>
          </div>
          <div className="w-[359.95px] px-[24px]  ">
            <h5 className="mt-[25px] mb-[29px] font-inter font-bold text-[24px] leading-[28px] text-[#050038]    ">
              Security first
            </h5>
            <p className="font-Helvetica font-normal text-[18px] leading-[24px]  text-[rgba(5,0,56,0.6)]   ">
              We treat your data like you would — with the utmost care. We
              follow industry-leading security standards and give you tools to
              protect intellectual property. Learn more at our
              <span className=" text-[#4262FF] "> Trust Center .</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center   ">
          <button className="mt-[72px] w-[178px] h-[48px] bg-[#4262FF] rounded-[24px] text-white font-normal text-[18px] leading-[24px] transition-all duration-300 hover:shadow-xl hover:text-[#b8b8b8] ">
            Sign up free →
          </button>
        </div>
      </div>
      <div className="my-[60px] mx-[150px]  flex justify-between items-center  ">
        <div>
          <h3 className="font-inter font-bold text-[48px] leading-[56px] text-[#050038]   ">
            Work together, <br /> wherever you work
          </h3>
          <p className="mt-[16px] mb-[40px] font-inter font-normal text-[18px] leading-[24px] text-[#050038]  ">
            In the office, remote, or a mix of the two, with Miro, <br /> your
            team can connect, collaborate, and co-create in <br /> one space no
            matter where you are.
          </p>
          <button className="flex gap-[5px] items-center text-[#4262FF]  ">
            Learn more
            <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
        <div>
          <img src={collaboratebg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Collaborate;
