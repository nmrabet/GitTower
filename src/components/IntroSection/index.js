import poster from "../../assets/img/Poster_frame_color.png";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";

import './introSection.css';

export default function IntroSection({handlePageChange}) {
  return (
    <div className="intro-container">
      <div className="intro">
        <div className="img-container">
          <img src={poster} className="poster-img" alt="poster" />

            <button className="button-scroll" onClick={() => handlePageChange(1)}>
              <ChevronDown className="chevron-down" />
              <span className="scroll-btn">SCROLL TO SEE MORE</span>
            </button>
        </div>
      </div>
    </div>
  );
}
