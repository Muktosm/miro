import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="px-[20px] bg-[#050038] py-[40px] text-white">
        <div className="flex justify-between   ">
          <div>
            <h4 className="mb-[24px] font-inter font-bold text-[18px] leading-[24px] text-[#FFFFFF]  ">
              Product
            </h4>
            <div className="flex flex-col  gap-[7px]  ">
              <a href="#">Online whiteboard</a>
              <a href="#">Apps & Integrations</a>
              <a href="#">Templates</a>
              <a href="#">Miroverse</a>
              <a href="#">Miro Developer Platform</a>
              <a href="#">Miro for Devices</a>
              <a href="#">Security & Compliance</a>
              <a href="#">Accessibility</a>
              <a href="#">Changelog</a>
            </div>
            <div className="flex mt-[18px]  ">
              <button className="mr-[5px] border-b-[2px] border-[wihite]">
                View demo
              </button>
              →
            </div>
          </div>
          <div>
            <h4 className="mb-[24px] font-inter font-bold text-[18px] leading-[24px] text-[#FFFFFF]  ">
              Solutions
            </h4>
            <div className="flex flex-col  gap-[7px] ">
              <a href="#">Meetings and Workshops</a>
              <a href="#">Brainstorming & Ideation</a>
              <a href="#">Agile Workflows</a>
              <a href="#">Diagramming</a>
              <a href="#">Research & Design</a>
              <a href="#">Strategy & Planning</a>
              <a href="#">Mind Map</a>
              <a href="#">Concept Map</a>
              <a href="#">Online Sticky Notes</a>
              <a href="#">Flowchart</a>
              <a href="#">Wireframing</a>
            </div>
          </div>
          <div>
            <h4 className="mb-[24px] font-inter font-bold text-[18px] leading-[24px] text-[#FFFFFF]  ">
              Resources
            </h4>
            <div className="flex flex-col gap-[7px]   ">
              <a href="#">Miro Academy</a>
              <a href="#">Help Center</a>
              <a href="#">Blog</a>
              <a href="#">Status</a>
              <a href="#">Miro Community</a>
              <a href="#">Miro Professional Network</a>
              <a href="#">Miro Experts Directory</a>
              <a href="#">Miro Events</a>
            </div>
          </div>
          <div>
            <h4 className="mb-[24px] font-inter font-bold text-[18px] leading-[24px] text-[#FFFFFF]  ">
              Company
            </h4>
            <div className="flex flex-col gap-[7px]    ">
              <a href="#">About us</a>
              <a href="#">Careers 🚀</a>
              <a href="#">Miro in the News</a>
              <a href="#">Customer Stories</a>
            </div>
          </div>
          <div>
            <h4 className="mb-[24px] font-inter font-bold text-[18px] leading-[24px] text-[#FFFFFF]  ">
              Plans and Pricing
            </h4>
            <div className="flex flex-col gap-[7px]   ">
              <a href="#">Pricing</a>
              <a href="#">Business</a>
              <a href="#">Enterprise</a>
              <a href="#">Consultants</a>
              <a href="#">Education</a>
              <a href="#">Startups</a>
              <a href="#">NPOs</a>
            </div>
            <div className="flex mt-[18px]  ">
              <button className="mr-[5px] border-b-[2px] border-[wihite]">
                Contact sales
              </button>
              →
            </div>
          </div>
        </div>
        <div className="mt-[100px] border-t-[1px] border-[#9B99AF] ">
          <div>
            <div>
              <div>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div>
                <p>
                  <FontAwesomeIcon icon={faGlobe} />
                  EN
                </p>
                <a href="#">© 2022 Miro</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Manage Cookies</a>
              </div>
            </div>
                      <div>
                          
            </div>
          </div>
        </div>
      </div>
    </>
  );}

export default Footer