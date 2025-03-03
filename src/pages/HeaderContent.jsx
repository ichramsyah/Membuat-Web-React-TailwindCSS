import React from 'react';

const HeaderContent = ({ header, paragraf }) => {
  return (
    <>
      <h1 className="text-center text-5xl font-medium">{header}</h1>
      <p className="text-center pt-5">{paragraf}</p>
    </>
  );
};

export default HeaderContent;
