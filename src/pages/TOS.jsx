import React from "react";
import { termsOfService } from "../../constants";
import Wrapper from "../components/util/Wrapper";

const TOS = () => {
  return (
    <Wrapper>
      {" "}
      <div className="mx-auto my-20 min-h-screen w-[95%] flex flex-col">
        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 w-full sm:w-2/3 md:w-1/2 xl:w-1/3 flex-col font-poppins bg-white p-5">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Terms of Service
          </h2>
          <ol className="list-decimal ">
            {termsOfService.map((term) => (
              <li key={term.id} className="mb-4">
                {" "}
                <p className="text-lg mb-2">{term.text}</p>
                <p>Last updated: {term.lastUpdated}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Wrapper>
  );
};

export default TOS;
