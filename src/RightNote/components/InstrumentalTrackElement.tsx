import { AudioPlayer } from "../../audio/AudioPlayer";
import { ImageHandler } from "./ImageHandler";
import { TrackInfo } from "./TrackInfo";

interface TrackElementProps {
    titleLeft: string;
    titleRight: string;
    trackVarNameLeft: string;
    trackVarNameRight: string;
}

export const InstrumentalTrackElement: React.FC<TrackElementProps> = ({
    titleLeft,
    titleRight,
    trackVarNameLeft,
    trackVarNameRight,
}) => {
    const sourcePathImage: string = "/images/";
    const sourcePathMusic: string = "/music/";

    const leftMusicPath = `${sourcePathMusic}${trackVarNameLeft}.mp3`;
    const leftImagePath = `${sourcePathImage}${trackVarNameLeft}.jpg`;
    const rightMusicPath = `${sourcePathMusic}${trackVarNameRight}.mp3`;
    const rightImagePath = `${sourcePathImage}${trackVarNameRight}.jpg`;

    return (
        <div className="mb-4">
            {/* <h2 className="text-primary anton-regular">{titleLeft}</h2> */}
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 text-primary">
                {/* First Column */}
                <div className="col rounded border  border-secondary p-3">
                    <h2 className="text-primary anton-regular">{titleLeft}</h2>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="p-2 ">
                            <AudioPlayer src={leftMusicPath} title="Play" />
                            <div
                                className="p-1 mt-2 d-flex justify-content-center align-items-center"
                                style={{ flex: "1" }}
                            >
                                <TrackInfo
                                    trackVarName={trackVarNameLeft}
                                    gender="female"
                                />
                            </div>
                        </div>
                        <ImageHandler trackSourceName={leftImagePath} />
                    </div>
                </div>

                {/* Second Column */}

                <div className="col rounded border  border-secondary p-3">
                    <h2 className="text-primary anton-regular text-end">
                        {titleRight}
                    </h2>
                    <div className="d-flex align-items-center justify-content-center">
                        <ImageHandler trackSourceName={rightImagePath} />

                        <div className="p-2">
                            <AudioPlayer src={rightMusicPath} title="Play" />
                            <div
                                className="p-1 mt-2 d-flex justify-content-center align-items-center"
                                style={{ flex: "1" }}
                            >
                                <TrackInfo
                                    trackVarName={trackVarNameRight}
                                    gender="male"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
