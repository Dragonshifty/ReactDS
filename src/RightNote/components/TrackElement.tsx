import { AudioPlayer } from "../../audio/AudioPlayer";
import { TrackInfo } from "./TrackInfo";

interface TrackElementProps {
    title: string;
    trackVarName: string;
}

export const TrackElement: React.FC<TrackElementProps> = ({
    title,
    trackVarName,
}) => {
    const sourcePathImage: string = "/images/";
    const sourcePathMusic: string = "/music/";
    const femaleMusicPath: string = `${sourcePathMusic}${trackVarName}Female.mp3`;
    const femaleImagePath: string = `${sourcePathImage}${trackVarName}Female.jpg`;
    const maleMusicPath: string = `${sourcePathMusic}${trackVarName}Male.mp3`;
    const maleImagePath: string = `${sourcePathImage}${trackVarName}Male.jpg`;

    return (
        <div className="mb-4">
            <h2 className="text-primary">{title}</h2>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 text-primary">
                {/* First Column */}
                <div className="col rounded border border-top-0 border-bottom-0 border-primary p-3">
                    <div className="d-flex align-items-center">
                        <div className="p-1" style={{ flex: "0 0 160px" }}>
                            <img
                                className="shadow border"
                                src={femaleImagePath}
                                height="160"
                                width="160"
                                alt=""
                            />
                        </div>
                        <div
                            className="p-1 d-flex justify-content-center align-items-center"
                            style={{ flex: "1" }}
                        >
                            <TrackInfo
                                trackVarName={trackVarName}
                                gender="female"
                            />
                        </div>
                        <div className="p-2" style={{ flex: "0 0 160px" }}>
                            <AudioPlayer src={femaleMusicPath} title="Play" />
                        </div>
                    </div>
                </div>

                {/* Second Column */}
                <div className="col rounded border border-top-0 border-bottom-0 border-primary p-3">
                    <div className="d-flex align-items-center">
                        <div className="p-1" style={{ flex: "0 0 160px" }}>
                            <img
                                className="shadow border"
                                src={maleImagePath}
                                height="160"
                                width="160"
                                alt=""
                            />
                        </div>
                        <div
                            className="p-1 d-flex justify-content-center align-items-center"
                            style={{ flex: "1" }}
                        >
                            <TrackInfo
                                trackVarName={trackVarName}
                                gender="male"
                            />
                        </div>
                        <div className="p-2" style={{ flex: "0 0 160px" }}>
                            <AudioPlayer src={maleMusicPath} title="Play" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
