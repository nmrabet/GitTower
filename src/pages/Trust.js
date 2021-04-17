import React from 'react';
import Slide from "../components/Slider";
import ActionSection from "../components/ActionSection";
import SocialSection from "../components/SocialSection";
import Room6 from "../assets/img/Room6.png";
export default function Trust() {
    return(
        <Slide>
            <ActionSection color="black">
                <React.Fragment>
                    <div className="action-txt">
                        <strong className="white-text uppercase">trust in the</strong>
                        <strong className="white-text uppercase">process.</strong>
                    </div>
                </React.Fragment>
            </ActionSection>
            <SocialSection img={Room6} color="white" objectPosition="0% 75%" />
        </Slide>

    )
}
