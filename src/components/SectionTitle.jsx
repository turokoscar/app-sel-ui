import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="bg-gray-100 p-5 ">
      <h3 className="text-left text-xl font-semibold text-[#020817]">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
