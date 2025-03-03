import React from 'react';

const ServicesBox = ({ i, header, paragraf, bgColor }) => {
  return (
    <>
      <div className={`box ${bgColor} rounded-lg p-4 shadow`}>
        <i className={`${i} text-white text-2xl`}></i>
        <h1 className="font-bold text-white text-xl mt-2  ">{header}</h1>
        <p className="text-white mt-2">{paragraf}</p>
      </div>
    </>
  );
};

export default ServicesBox;
