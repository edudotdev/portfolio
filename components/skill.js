import React from 'react';

const skill = ({skill}) => {
  return (
    <span className="bg-white px-6 py-4 absolute top-0 left-0 rounded-full">
      <p className="text-purple-500">{skill}</p>
    </span>
  );
}

export default skill;
