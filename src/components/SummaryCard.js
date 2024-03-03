import React from "react";
import CategoryCard from "./CategoryCard";
import categoryData from "../data.json";

const SummaryCard = () => {
  return (
    <div className="mx-auto h-[365px] w-full max-w-screen-md px-8 md:h-[512px] md:w-[368px]">
      <p className="py-6 text-lg font-bold text-dark-gray-blue md:text-2xl">
        Summary
      </p>
      {categoryData.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
      <div className="pb-8 pt-6">
        <button className="flex h-14 w-full items-center justify-center rounded-full bg-dark-gray-blue text-lg font-bold hover:bg-violet-blue">
          Continue
        </button>
      </div>
    </div>
  );
};

export default SummaryCard;
