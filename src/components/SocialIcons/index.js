import "./SocialIcons.css";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter_icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook_icon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin_icon.svg";
import { ReactComponent as QuestionMarkIcon } from "../../assets/icons/facebook_icon.svg";

export default function Index(props) {
  const { color } = props;

  return (
      <div className="social-icon-wrapper">
        <div className="social-icons">
          <TwitterIcon className="social-icon" style={{ width: 40, color }} />
          <FacebookIcon className="social-icon" style={{ width: 40, color }} />
          <LinkedInIcon className="social-icon" style={{ width: 40, color }} />
          <QuestionMarkIcon className="social-icon" style={{ width: 40, color }} />
        </div>
      </div>
  );
}
