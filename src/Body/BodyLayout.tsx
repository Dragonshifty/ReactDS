import { AudioPlayer } from "../audio/AudioPlayer";
import React, { useEffect } from "react";
import { textScroll } from "../scripts/TextScroll";
import { TrackElement } from "../RightNote/components/TrackElement";

export const BodyLayout: React.FC = (props) => {
    // useEffect(() => {
    //     const paragraphs = document.querySelectorAll(
    //         ".textscroll p"
    //     ) as NodeListOf<HTMLElement>;
    //     textScroll(paragraphs);
    // }, []);

    return (
        <div>
            <div className="container mt-3">
                <h3 className="mb-1 text-light">Tracks</h3>
                <div className="p-5">
                    <TrackElement title="Call To Me" trackVarName="callToMe" />
                    <TrackElement title="Clearly" trackVarName="clearly" />
                    <TrackElement
                        title="My Own Expectations"
                        trackVarName="myOwnExpectations"
                    />
                    <TrackElement title="Fine" trackVarName="fine" />
                </div>
            </div>
        </div>
    );
};
