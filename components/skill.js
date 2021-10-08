import React from 'react';

const skill = ({skill, top=0, left=0}) => {
  return (
    <span
        style={{ top: top, left: left, boxShadow: '0 0 0 8px rgba(255,255,255,0.5)'}}
        className="bg-white px-6 py-4 absolute top-0 left-0 rounded-full">
      <p className="text-purple-500 font-bold">{skill}</p>
    </span>
  );
}

export default skill;
