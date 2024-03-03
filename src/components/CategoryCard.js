import React from "react";

const CategoryCard = ({ category, score, icon, background, textColor }) => {
  return (
    <div
      className={`mb-4 flex h-14 items-center justify-between rounded-xl px-4 ${background} bg-opacity-5`}
    >
      <div className="flex gap-3">
        <img src={icon} alt="catergory icon" />
        <span className={`${textColor} md:text-lg`}>{category}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-dark-gray-blue font-bold text-lg">{score}</span>
        <span className="text-gray-500 font-bold text-lg">/ 100</span>
      </div>
    </div>
  );
};

export default CategoryCard;
