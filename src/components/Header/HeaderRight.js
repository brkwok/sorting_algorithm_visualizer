import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

export default function HeaderRight() {
  return (
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
  );
}
