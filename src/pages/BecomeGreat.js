import React from 'react';
import Slide from "../components/Slider";
import ActionSection from "../components/ActionSection";
import SocialSection from "../components/SocialSection";
import img from "../assets/img/Room2.png";
export default function BecomeGreat() {
    return(

        <Slide>
            <ActionSection color="#09233C">
                <React.Fragment>
                    <div className="smaller-txt">
                        <strong className="first-text">
                            <span className="coloured-text uppercase">You need to be bad<br />before you can become</span>
                        </strong>
                        <br/>
                        <strong className="white-text uppercase">great.</strong>
                    </div>
                </React.Fragment>
            </ActionSection>
            <SocialSection img={img} color="black" objectPosition="0 75%" />
        </Slide>
    )
}
