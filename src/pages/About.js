import React from 'react';
import Slide from "../components/Slider";
import ActionSection from "../components/ActionSection";
import SocialSection from "../components/SocialSection";
import Room1_3 from "../assets/img/Room1_3.png";
export default function About() {
    return(
    <Slide>
        <div id="about" />
        <ActionSection color="#09233C">
            <React.Fragment>
                <div className="action-txt">
                    <strong className="first-text">
                        <span className="coloured-text smaller-txt uppercase">tell the</span>
                    </strong>
                    <strong className="white-text uppercase">story</strong>
                </div>
            </React.Fragment>
        </ActionSection>
        <SocialSection objectPosition="bottom" img={Room1_3} color="#3ABDE7" />
    </Slide>)
}

