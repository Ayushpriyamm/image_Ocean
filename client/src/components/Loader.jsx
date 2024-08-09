import React from "react";
import { MutatingDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center  z-50">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#20c0ab"
        secondaryColor="#ffffff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
      />
    </div>
  );
};
