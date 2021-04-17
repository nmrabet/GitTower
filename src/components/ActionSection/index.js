import "./ActionSection.css";
import { ReactComponent as Logo } from "../../assets/img/tower-logo.svg";
import Buttons from '../Buttons'
export default function ActionSection({ color, children, logoDark, isDesign }) {
  return (
    <div className={"action-section " + (isDesign ? 'is-design' : '')} style={{ backgroundColor: color }}>
      <Logo className={'logo '+ (logoDark ? 'logo-dark' : '')} />
      <div className="action">
        {children}
        <Buttons />
      </div>
    </div>
  );
}
