import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="bg-gray-100 p-5 border-t border-x border-gray-200 rounded-t-md ">
      <h3 className="text-left text-xl font-semibold text-[#020817]">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
