"use client";
import company from "./overview.json";

import React, { useState } from "react";

const CompanyOverview: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const companyData = company.company_overview;

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const shortDescription = companyData.description.substring(0, 100);
  const fullDescription = companyData.description;
  return (
    <div className="max-w-md p-6 bg-white border border-gray-200 shadow-md rounded-lg">
      <h6 className="text-xl font-semibold text-gray-900 mb-4">Company Overview</h6>

      <div className="grid grid-cols-2 gap-y-4 text-sm">
        <div>
          <p className="uppercase text-gray-400">Industry</p>
          <p className="text-gray-800">{companyData.industry}</p>
        </div>
        <div>
          <p className="uppercase text-gray-400">Categories</p>
          <p className="text-gray-800">{companyData.categories}</p>
        </div>
        <div>
          <p className="uppercase text-gray-400">Since</p>
          <p className="text-gray-800">{companyData.since}</p>
        </div>
        <div>
          <p className="uppercase text-gray-400">Corporate Overview</p>
          <a href="#" className="text-grey-800">2 Businesses</a>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-700">
        {isExpanded ? fullDescription : shortDescription}
        <button
          onClick={toggleExpanded}
          className="text-blue-600 ml-1 underline"
        >
          {isExpanded ? "view less" : "view more"}
        </button>
      </p>
    </div>
  );
};

export default CompanyOverview;
