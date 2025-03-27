import React from "react";
import { Icon } from "@iconify/react";

const IconComponent = ({ icon, className = "" }) => {
  return (
    <Icon icon={icon} className={`text-xl ${className} max-lg:text-base`} />
  );
};

export default IconComponent;
