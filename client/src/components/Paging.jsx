import React from "react";

export const Paging = (totalImages, imgPerPage) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalImages / imgPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumber.map((number) => {
          <li key={number}>{number}</li>;
        })}
      </ul>
    </div>
  );
};
