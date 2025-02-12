"use client";

import { BounceLoader } from "react-spinners";

export const Loader = () => {
    return (
      <div className="h-full flex items-center justify-center">
        <BounceLoader color="#22c55e" size={40} />
      </div>
    );
  };