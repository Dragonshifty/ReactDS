import React, { useEffect } from "react";
import { Popover } from "bootstrap";
import { infoData } from "./TrackInfoData";

interface infoDataProps {
    trackVarName: keyof typeof infoData;
    gender: string;
}

export const TrackInfo: React.FC<infoDataProps> = ({
    trackVarName,
    gender,
}) => {
    useEffect(() => {
        const popoverTrigger = document.getElementById(
            `popover-${trackVarName}${gender}`
        );
        if (popoverTrigger) {
            new Popover(popoverTrigger, {
                html: true,
            });
        }
    }, []);

    return (
        <div>
            <button
                className="btn btn-primary btn-md"
                id={`popover-${trackVarName}${gender}`}
                data-bs-toggle="popover"
                data-bs-title={infoData[trackVarName]?.title}
                data-bs-content={`${infoData[trackVarName]?.description}<br><br>
                Type: ${infoData[trackVarName]?.worksType}<br>
                Authors: ${infoData[trackVarName]?.authors}<br>`}
            >
                Information
            </button>
        </div>
    );
};
