import React from "react";

const ResultsCard = () => {
  return (
    <div className="h-[365px] w-[375px] bg-gradient-blue-purple">
      <div className="flex flex-col items-center justify-start">
        <span>Your Result</span>
        <div>
          <span>78</span>
          <span>of 100</span>
        </div>
        <span>Great</span>
        <span>
          Your performance exceed 65% of the people conducting the test here!
        </span>
      </div>
    </div>
  );
};

export default ResultsCard;
