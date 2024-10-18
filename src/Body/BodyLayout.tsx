import { AudioPlayer } from "../audio/AudioPlayer";
import React, { useEffect, useState } from "react";
import { textScroll } from "../scripts/TextScroll";
import { TrackElement } from "../RightNote/components/TrackElement";

export const BodyLayout: React.FC = (props) => {
    // useEffect(() => {
    //     const paragraphs = document.querySelectorAll(
    //         ".textscroll p"
    //     ) as NodeListOf<HTMLElement>;
    //     textScroll(paragraphs);
    // }, []);

    const [pageOne, setPageOne] = useState(true);
    const [pageTwo, setPageTwo] = useState(false);

    function turnPage() {
        setPageOne(!pageOne);
        setPageTwo(!pageTwo);
    }

    return (
        <div>
            <div className="container mt-3">
                <h3 className="mb-1 text-light">Tracks</h3>
                <button onClick={turnPage}>Click</button>
                <div className="p-5">
                    {pageOne && (
                        <>
                            <TrackElement
                                title="Call To Me"
                                trackVarName="callToMe"
                            />
                            <TrackElement
                                title="Clearly"
                                trackVarName="clearly"
                            />
                            <TrackElement
                                title="My Own Expectations"
                                trackVarName="myOwnExpectations"
                            />
                            <TrackElement title="Fine" trackVarName="fine" />
                        </>
                    )}
                    {pageTwo && (
                        <>
                            <TrackElement title="My One" trackVarName="myOne" />
                            <TrackElement title="Shine" trackVarName="shine" />
                            <TrackElement title="Fly On" trackVarName="flyOn" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
