import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="flex min-h-screen -mt-[56px] bg-eggshell dark:bg-richBlack">
      {children}
    </div>
  );
};

export default Wrapper;
