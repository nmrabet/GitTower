import React from 'react';
import Slide from "../components/Slider";
import ActionSection from "../components/ActionSection/index.js";
import IntroSection from "../components/IntroSection";
export default function Home({handlePageChange}) {
    return <Slide>
        <ActionSection color="white" logoDark={true}>
            <React.Fragment>
                <div className="action-txt">
                    <strong className="first-text">
                        THE <span className="coloured-text uppercase">design</span>
                    </strong>
                    <strong className="second-text uppercase">manifesto</strong>
                </div>
            </React.Fragment>
        </ActionSection>
        <IntroSection handlePageChange={handlePageChange} />
    </Slide>
}
