import React from "react";
import iso from "../assets/iso.png";
import $1 from "../assets/$1.png";
import $99 from "../assets/99.png";
import $1000 from "../assets/$1000.png";
import $45M from "../assets/$45M.png";
import $100 from "../assets/$100.png";
import vmware from "../assets/vmware.png";
import docusing from "../assets/docusing.png";
import frog from "../assets/frog.png";
import rm from "../assets/rm.png";
import ja from "../assets/ja.png";
import la from "../assets/lb.png";
const Trust = () => {
  return (
    <>
      <div className="my-[60px] bg-[#FFD02F] px-[150px] ">
        <div className="flex items-center justify-center flex-col   ">
          <h2 className="pt-[120px] pb-[40px]  font-inter font-bold text-[48px] leading-[56px] text-[#050038]   ">
            Why companies large <br /> and small trust Miro
          </h2>
          <a
            href="#"
            className="font-inter font-normal text-[18px] leading-[24px] border-b-[1px] border-[#000]  "
          >
            Contact Sales to request a demo
          </a>
        </div>
        <div className="grid grid-rows-2  grid-cols-3 gap-x-[20px] gap-y-[64px] pb-[60px] ">
          <div>
            <img src={iso} alt="Iso image" />
            <p className="text-center    ">
              ISO-27001 enterprise-grade security compliant
            </p>
          </div>
          <div>
            <img src={$1} alt="#1 image " />
            <p className="text-center    ">
              Visual Collaboration Platform on G2
            </p>
          </div>
          <div>
            <img src={$99} alt="99 image" />
            <p className="text-center    ">of the Fortune 100 are customers</p>
          </div>
          <div>
            <img src={$1000} alt="Image " />
            <p className="text-center    ">
              community- and expert-built templates
            </p>
          </div>
          <div>
            <img src={$45M} alt="Image " />
            <p className="text-center    ">users around the world</p>
          </div>
          <div>
            <img src={$100} alt="Image " />
            <p className="text-center    ">
              integrations with technology partners
            </p>
          </div>
        </div>
      </div>
      <div className=" my-[60px] mx-[160px]  ">
        <div className="flex flex-col items-center   ">
          <h3 className="font-inter font-bold text-[48px] leading-[56px] text-[#050038]    ">
            Loved by the world's best teams
          </h3>
          <a
            href="#"
            className="w-[282px] h-[48px] rounded-[24px] border-[1px] border-[#4262FF] flex items-center justify-center mt-[24px] text-[#4262FF] font-Helvetica font-normal text-[18px] leading-[24px]  "
          >
            See all customer stories →
          </a>
        </div>
        <div className="flex mt-[40px] gap-[20px] w-[1150px]   ">
          <div className="w-[360px] px-[35px] flex flex-col justify-between">
            <div>
              <img src={vmware} alt="Image" />
              <p className="mt-[35px]  mb-[50px] font-Helvetica font-normal text-[18px] leading-[24px] text-[rgba(5,0,56,0.6)]  ">
                “When the pandemic hit, those of us who thrive on in-person
                collaboration were worried that our creativity and productivity
                would suffer. Miro was the perfect tool to help us with
                collaboration, whiteboarding, and retrospectives while remote.”
              </p>
            </div>
            <div className="flex gap-[16px] items-center   ">
              <img src={rm} alt="Roxanne Mustafa' image" />
              <div className="font-Helvetica font-normal text-[14px] leading-[20px] text-[rgba(5,0,56,0.6)]   ">
                <p>Roxanne Mustafa</p>
                <p>Design Team Lead at VMware</p>
              </div>
            </div>
          </div>
          <div className="w-[360px] px-[35px] flex flex-col justify-between">
            <div>
              <img src={docusing} alt="Image" />
              <p className="mt-[35px]  mb-[50px] font-Helvetica font-normal text-[18px] leading-[24px] text-[rgba(5,0,56,0.6)]  ">
                “Miro helps solve one of the major gaps in product design: how
                to manage tasks across product designers whose projects are in
                different tools.”
              </p>
            </div>
            <div className="flex gap-[16px] items-center   ">
              <img src={ja} alt="Jane Ashley" />
              <div className="font-Helvetica font-normal text-[14px] leading-[20px] text-[rgba(5,0,56,0.6)]   ">
                <p>Jane Ashley</p>
                <p>Head of Design at DocuSign</p>
              </div>
            </div>
          </div>
          <div className="w-[360px] px-[35px] flex flex-col justify-between">
            <div>
              <img src={frog} alt="Image" />
              <p className="mt-[35px]  mb-[50px] font-Helvetica font-normal text-[18px] leading-[24px] text-[rgba(5,0,56,0.6)]  ">
                “As we used Miro we moved from skepticism to belief to
                innovation, and now we have a tool that’s at the core of what we
                do and will continue to extend into the future.”
              </p>
            </div>
            <div className="flex gap-[16px] items-center   ">
              <img src={la} alt="Image" />
              <div className="font-Helvetica font-normal text-[14px] leading-[20px] text-[rgba(5,0,56,0.6)]   ">
                <p>Laura Baird</p>
                <p>Associate Design Director at frog</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[160px] my-[60px] bg-[#050038] rounded-[16px] py-[120px] flex items-center justify-center flex-col  ">
        <p className="font-inter font-bold text-[48px] leading-[53px] text-[#FFF]  ">
          Join 45M+ users today
        </p>
        <p className="font-inter font-normal text-[18px] leading-[24px] text-[rgba(255,255,255,0.6)] mt-[5px] mb-[10px] ">
          Start for free — upgrade anytime.
        </p>
        <p className="w-[386px]  font-inter font-normal text-[18px] leading-[24px] text-[rgba(255,255,255,0.6)] text-center border-b-[1px] border-[rgba(255,255,255,0.6)]  ">
          Joining as an organization? Contact Sales
        </p>
        <button className="mt-[40px] w-[175px] h-[48px] rounded-[32px] bg-[#4262FF] font-inter font-normal text-[18px] leading-[24px] text-white  ">
          Sign up free →
        </button>
      </div>
    </>
  );
};

export default Trust;
