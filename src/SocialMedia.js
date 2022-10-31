import './SocialMedia.css';
import { FaGithub } from "react-icons/fa";


function SocialMedia() {
  return (
    <div className="social_media">
        <a className="link" href="https://www.slack.com/ogunsanya-taofeeq" target="_blank" rel="noopener noreferrer" >
        <img src="./slack.png" alt="slack"/>
        </a>
        <a className="link" href="https://www.github.com/tsucess" target="_blank" rel="noopener noreferrer" >
        <FaGithub size="30" />
        </a>
    </div>
  );
}

export default SocialMedia;
