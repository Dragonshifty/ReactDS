import React, { useEffect, useState } from "react";
import { textScroll } from "../scripts/TextScroll";
import { TrackElement } from "../RightNote/components/TrackElement";
import { Preamble } from "../RightNote/components/Preamble";
import { Pagination } from "../RightNote/components/Pagination";
import { InstrumentalTrackElement } from "../RightNote/components/InstrumentalTrackElement";

export const BodyLayout: React.FC = (props) => {
    // useEffect(() => {
    //     const paragraphs = document.querySelectorAll(
    //         ".textscroll p"
    //     ) as NodeListOf<HTMLElement>;
    //     textScroll(paragraphs);
    // }, []);
    const [currentPage, setCurrentPage] = useState("option1");
    const handlePageChange = (page: string) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="container mt-3 ">
                <Preamble />
                <div className="d-flex justify-content-center mb-4">
                    <Pagination
                        page={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
                <div className="p-1">
                    {currentPage === "option1" && (
                        <>
                            <TrackElement
                                title="Call To Me"
                                trackVarName="callToMe"
                            />
                            <TrackElement title="Fly On" trackVarName="flyOn" />
                            <TrackElement
                                title="My Own Expectations"
                                trackVarName="myOwnExpectations"
                            />
                            <TrackElement title="Fine" trackVarName="fine" />
                        </>
                    )}
                    {currentPage === "option2" && (
                        <>
                            <TrackElement
                                title="Clearly"
                                trackVarName="clearly"
                            />
                            <TrackElement title="My One" trackVarName="myOne" />
                            <TrackElement title="Shine" trackVarName="shine" />
                        </>
                    )}
                    {currentPage === "option3" && (
                        <>
                            <InstrumentalTrackElement
                                titleLeft="Rising"
                                trackVarNameLeft="rising"
                                titleRight="Triggered"
                                trackVarNameRight="triggered"
                            />
                            <InstrumentalTrackElement
                                titleLeft="Dream Wistfully"
                                trackVarNameLeft="dreamWistfully"
                                titleRight="Dream Wistfully Discovery"
                                trackVarNameRight="dreamWistfullyDiscovery"
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
