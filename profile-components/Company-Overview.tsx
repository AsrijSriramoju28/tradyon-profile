"use client"

import React, { useState } from "react";

const CompanyOverview: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const shortDescription =
    "KMG is a company built on a few key values. We have over the years added humility and humility";
  const fullDescription =
    "KMG is a company built on a few key values. We have over the years added humility and humility as part of our core philosophy, focusing on sustainable growth, community involvement, and delivering high-quality products that meet international standards across markets.";

  return (
    <div className="w-fill-360 h-hug-262 p-4 bg-white border border-gray-200 shadow-md rounded-lg">
      <h6 className="font-worksans text-20 leading-28 font-semibold text-[rgba(255, 255, 255, 1)] padding-16 gap-16 mb-4">
        Company Overview
      </h6>

      <div className="grid grid-cols-2 gap-y-4 text-sm">
        <div>
          <p className="uppercase width-fill-156 height-hug-20 text-sm leading-20 text-gray-400 font-worksans weight-400 size-11 line-height-20 letter-spacing-0 tracking-wide">
            Industry
          </p>
          <p className="text-gray-800 width-fill-156 height-hug-24 font-worksans weight-400 size-16 line-height-24 letter-spacing-0 tracking-wide">
            Manufacturing
          </p>
        </div>
        <div>
          <p className="uppercase w-156 h-156 leading-20 text-sm textgray-400 font-worksans tracking-wide">
            Categories
          </p>
          <p className="text-gray-800 font-worksans tracking-wide w-156 h-24 size-base">
            Spices, Oils, Grains
          </p>
        </div>
        <div>
          <p className="uppercase w-156 h-20 weight-400 text-sm leading-20 text-gray-400 font-worksans tracking-wide">
            Since
          </p>
          <p className="text-gray-800 size-base w-156 h-24 weight-400 font-worksans">2015</p>
        </div>
        <div>
          <p className="uppercase w-156 h-20 weight-400 size-sm text-sm leading-20 text-gray-400 font-worksans tracking-wide">
            Corporate Overview
          </p>
          <a href="#" className="text-grey-400 w-156 h-24 weight-400 size-base font-worksans tracking-wide">
            2 Businesses
          </a>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-700 font-worksans">
        {isExpanded ? fullDescription : shortDescription}
        <button
          onClick={toggleExpanded}
          className="text-blue-600 ml-1"
        >
          {isExpanded ? "view less" : "...view more"}
        </button>
      </p>
    </div>
  );
};

export default CompanyOverview;
