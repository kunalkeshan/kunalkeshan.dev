/**
 * Meme Tooltip Component
 */

import React from "react";

interface MemeTooltipProps {
  image: string;
}

/**
 * @description make sure the parent has 'relative group' classes
 */
const MemeTooltip: React.FC<MemeTooltipProps> = ({ image }) => {
  return (
    <div
      className="absolute -top-36 left-1/2 h-40 w-40 -translate-x-1/2 bg-contain bg-no-repeat opacity-0 transition-all duration-300 group-hover:opacity-100"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    ></div>
  );
};

export default MemeTooltip;
