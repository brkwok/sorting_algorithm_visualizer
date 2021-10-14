import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <section id="header-container">
      <div id="header-left">
        <div id="header-title">Sorting Visualizer</div>
        <div id="header-dropdown">
          <span id="header-dropdown-title">Sorting Algorithms</span>
          <FontAwesomeIcon
            id="header-caret"
            className="header-caret"
            icon={faCaretUp}
          />
        </div>
      </div>
      <div id="header-right">
        <a target="_blank" href="https://github.com//brkwok">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/br-kwok/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a target="_blank" href="https://angel.co/u/brkwok">
          <FontAwesomeIcon icon={faAngellist} />
        </a>
      </div>
    </section>
  );
}
