import React from "react";
import PropTypes from "prop-types";
import { getPathD, getPaths } from "../utils/painUtils";

const Body = ({ highlightedPart, setHighlightedPart }) => {
  const handleClick = (event) => {
    const id = event.target.id;
    setHighlightedPart("painArea", id);
  };

  const getHighlightStyle = (id) => {
    return highlightedPart === id
      ? { fill: "red" } // Highlight style
      : {}; // Default style
  };
  return (
    <svg
      width="148"
      height="400"
      viewBox="0 0 148 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      {getPaths.map((id) => (
        <path
          key={id}
          id={id}
          d={getPathD(id)}
          fill="#EBB49B"
          style={getHighlightStyle(id)}
        />
      ))}
    </svg>
  );
};

Body.propTypes = {
  highlightedPart: PropTypes.string,
  setHighlightedPart: PropTypes.func,
};

export default Body;
