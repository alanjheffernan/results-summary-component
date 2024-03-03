import React from "react";

const ResultsCard = () => {
  return (
    <div className="mx-auto h-[365px] w-full rounded-b-[32px] bg-gradient-to-b from-light-slate-blue to-light-royal-blue md:h-[512px] md:w-[368px] md:rounded-[32px]">
      <div className="flex flex-col items-center justify-start">
        <span className="py-6 text-lg font-bold text-light-lavender md:py-10">
          Your Result
        </span>

        <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue pb-6">
          <span className="text-[56px] font-extrabold leading-[72px]">76</span>
          <span className="text-base font-bold text-light-lavender">
            of 100
          </span>
        </div>

        <span className="p-2 text-2xl font-bold md:p-7">Great</span>

        <p className="w-[260px] text-center text-light-lavender md:text-lg">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
};

export default ResultsCard;
