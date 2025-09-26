import React from 'react';

const StyledHeading = ({ as: Component = 'h2', text, className }) => {
  if (!text) return null;

  const words = text.split(' ').map((word, index) => {
    // Special case for "PlayGround"
    if (word === "PlayGround") {
      return (
        <span key={index}>
          <span className="text-[#C1121F]">P</span>
          <span>lay</span>
          <span className="text-[#C1121F]">G</span>
          <span>round</span>
          {' '}
        </span>
      );
    }
    
    if (word.length === 0) return null;
    return (
      <span key={index}>
        <span className="text-[#C1121F]">{word.charAt(0)}</span>
        <span>{word.slice(1)}</span>
        {' '}
      </span>
    );
  });

  return (
    <Component className={className}>
      {words}
    </Component>
  );
};

export default StyledHeading;