import React from "react";

const PageTitle = ({ titlePage, subTitle }) => {
  return (
    <div className="w-full py-6">
      <h3 className="text-2xl font-bold text-pantone-7738 leading-8">
        {titlePage}
      </h3>
      <p className="text-md pt-2 text-gray-400">{subTitle}</p>
    </div>
  );
};

export default PageTitle;
