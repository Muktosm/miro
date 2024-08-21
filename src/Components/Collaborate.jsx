import React from "react";

const Collaborate = () => {
  return (
    <>
      <div className="mt-[24px] mb-[44px] mx-[160px]   ">
        <h2 className="font-inter font-bold text-[48px] leading-[56px] text-[#050038] text-center mb-[12px]  ">
          <br /> Collaborate without <br /> constraints
        </h2>
        <div className="flex items-center justify-between   ">
          <div className="w-[359.95px] px-[24px]  ">
            <h5>Free forever</h5>
            <p>
              Our free plan gives you unlimited team members, 3 boards, and 300+
              expert-made templates. Signing up with your work email lets you
              bring in your team faster. See our pricing plans for more
              features.
            </p>
          </div>
          <div className="w-[359.95px] px-[24px]  ">
            <h5>Easy integrations</h5>
            <p>
              Miro has 100+ powerful integrations with tools you already use
              like G Suite, Slack, and Jira, so your workflow is seamless. View
              the full list in our Marketplace .
            </p>
          </div>
          <div className="w-[359.95px] px-[24px]  ">
            <h5>Security first</h5>
            <p>
              We treat your data like you would — with the utmost care. We
              follow industry-leading security standards and give you tools to
              protect intellectual property. Learn more at our Trust Center .
            </p>
          </div>
        </div>
        <div>
          <button>Sign up free →</button>
        </div>
      </div>
    </>
  );
};

export default Collaborate;
