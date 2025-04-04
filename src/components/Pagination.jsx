import React from "react";

const Pagination = ({ nextPageFn, page, prevPageFn }) => {
  return (
    <div className="bg-gray-400 p-4 h-[50px] mt-8 flex justify-center">
      <div onClick={prevPageFn} className="px-8">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div>{page}</div>
      <div onClick={nextPageFn} className="px-8">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
