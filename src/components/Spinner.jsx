import React from "react";
import {Circles} from "react-loader-spinner";

const Spinner = ({ msg }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Circles
        color="#FC5255"
        height={50}
        width={200}

      />
      <p className="text-lg text-center px-2 py-5">{msg}</p>
    </div>
  );
};

export default Spinner;
