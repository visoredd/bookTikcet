import React from "react";

const Model = ({ children, open = true }) => {
  if (!open) {
    return <></>;
  }
  return (
    <div className="w-full h-full bg-black fixed top-0 left-0 bg-opacity-80 z-10">
      <div className="relative bg-white mx-auto top-40 border-2 rounded-md w-96 border-slate-600">
        {children}
      </div>
    </div>
  );
};

export default Model;
