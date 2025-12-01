import React from "react";
import { privacySummary } from "../../constants";
import Wrapper from "../components/util/Wrapper";

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      {" "}
      <div className="mx-auto my-20 min-h-screen w-[95%] flex flex-col">
        <div className="flex mx-auto  sm:w-2/3 xl:w-1/2 border-b border-black dark:border-slate-300 border-dashed pb-20  flex-col">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-slate-200">
            Privacy Policy
          </h2>
          <ol className="list-decimal dark:text-slate-200">
            {privacySummary.map((term) => (
              <li key={term.id} className="mb-4">
                {" "}
                <h3 className="text-lg font-bold">{term.heading}</h3>
                <p className=" mb-2">{term.text}</p>
                {/* <p className="text-xs">Last updated: {term.lastUpdated}</p> */}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Wrapper>
  );
};

export default PrivacyPolicy;
