import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

export default function HeaderLeft({ setAlgorithm }) {
  return (
    <div id="header-left">
      <div id="header-title">Sorting Visualizer</div>
      <div id="header-dropdown">
        <span id="header-dropdown-title">Sorting Algorithms</span>
        <FontAwesomeIcon
          id="header-caret"
          className="header-caret"
          icon={faCaretUp}
        />
        <Dropdown setAlgorithm={setAlgorithm} />
      </div>
    </div>
  );
}
