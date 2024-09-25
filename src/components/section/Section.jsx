import React from "react";

const Section = ({ children }) => {
  return (
    <div className="md:max-w-screen-xl xl:max-screen-2xl  mx-auto py-2 ">
      {children}
    </div>
  );
};

export default Section;
