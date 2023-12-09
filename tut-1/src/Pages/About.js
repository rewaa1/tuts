
import React, { useState } from 'react';

const About = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <button className="px-4 py-2 bg-blue-500 text-white">Hover me</button>
      {isHovered && (
        <div
          className="absolute top-full left-0 bg-white border border-gray-300 rounded shadow p-4 z-10"
        >
          <ul>
            <li className="py-2">Option 1</li>
            <li className="py-2">Option 2</li>
            <li className="py-2">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default About;
