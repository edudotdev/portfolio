import React from 'react';

const skill = ({skill, top='unset', left='unset', bottom='unset', right='unset'}) => {
  return (
    <span
        style={{ top: top, left: left, bottom: bottom, right: right, boxShadow: '0 0 0 8px rgba(255,255,255,0.5)'}}
        className="bg-white px-8 py-4 absolute top-0 left-0 rounded-full">
      <p className="text-purple-500 font-bold">{skill}</p>
    </span>
  );
}

export default skill;
