import React from "react";

export const Tag = ({ text }: { text: string }) => {
  return (
    <div className="w-full max-w-[125px] h-11 rounded-[30px] border-[#000000] border text-base flex items-center justify-center mt-[28px] sm:mt-0">
      {text}
    </div>
  );
};