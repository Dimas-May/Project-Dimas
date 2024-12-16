import React from "react";

const Loader = () => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-[#0000006d] grip place-items-center">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
