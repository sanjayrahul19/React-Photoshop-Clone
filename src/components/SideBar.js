import React from "react";

const SideBarItem = ({ name, active, handleClick }) => {
  return (
    <button
      className={`sideBarItem ${active ? "active" : null}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default SideBarItem;
