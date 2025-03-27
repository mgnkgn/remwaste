import React from "react";
import colors from "../theme/colors";

const Card = ({ children }) => {
  return (
    <div
      className={`bg-gradient-to-br ${colors.cardBg} ${colors.cardShadow} ${colors.hoverShadow} ${colors.opacity} p-6 rounded-2xl backdrop hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300 ease-in-out hover:cursor-pointer opacity-70 bg-opacity-90`}
    >
      {children}
    </div>
  );
};

export default Card;
