import { AudioPlayer } from "../../audio/AudioPlayer";
import { ImageHandler } from "./ImageHandler";
import { TrackInfo } from "./TrackInfo";

interface TrackElementProps {
    title: string;
    trackVarName: string;
}

export const TrackElement: React.FC<TrackElementProps> = ({
    title,
    trackVarName,
}) => {
    const instrumentals: string[] = [
        "rising",
        "triggered",
        "dreamWistfully",
        "dreamWistfullyDiscovery",
    ];

    const instrumentalNameCheck = () => {};

    const sourcePathImage: string = "/images/";
    const sourcePathMusic: string = "/music/";
    const femaleMusicPath: string = `${sourcePathMusic}${trackVarName}Female.mp3`;
    const femaleImagePath: string = `${sourcePathImage}${trackVarName}Female.jpg`;
    const maleMusicPath: string = `${sourcePathMusic}${trackVarName}Male.mp3`;
    const maleImagePath: string = `${sourcePathImage}${trackVarName}Male.jpg`;

    return (
        <div className="mb-4">
            <h2 className="text-primary anton-regular">{title}</h2>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 text-primary">
                {/* First Column */}
                <div className="col rounded border  border-primary p-3">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="p-2 ">
                            <AudioPlayer src={femaleMusicPath} title="Play" />
                            <div
                                className="p-1 mt-2 d-flex justify-content-center align-items-center"
                                style={{ flex: "1" }}
                            >
                                <TrackInfo
                                    trackVarName={trackVarName}
                                    gender="female"
                                />
                            </div>
                        </div>
                        <ImageHandler trackSourceName={femaleImagePath} />
                    </div>
                </div>

                {/* Second Column */}
                <div className="col rounded border  border-primary p-3">
                    <div className="d-flex align-items-center justify-content-center">
                        <ImageHandler trackSourceName={maleImagePath} />

                        <div className="p-2">
                            <AudioPlayer src={maleMusicPath} title="Play" />
                            <div
                                className="p-1 mt-2 d-flex justify-content-center align-items-center"
                                style={{ flex: "1" }}
                            >
                                <TrackInfo
                                    trackVarName={trackVarName}
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
