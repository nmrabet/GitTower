import React from 'react';
import Slide from "../components/Slider";
import ActionSection from "../components/ActionSection";
import SocialSection from "../components/SocialSection";
import Room4 from "../assets/img/Room4.png";
export default function Design() {
    return(
        <Slide>
            <ActionSection color="#09233C" isDesign={true}>
                <React.Fragment>
                    <div className="action-txt">
                        <strong className="white-text uppercase">design</strong>
                        <strong className="white-text uppercase">every day.</strong>
                    </div>
                </React.Fragment>
            </ActionSection>
            <SocialSection img={Room4} color="white" objectPosition="0% 75%" />
        </Slide>)
}

