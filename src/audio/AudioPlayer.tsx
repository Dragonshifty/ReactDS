import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";

interface AudioPlayerProps {
    src: string;
    title: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
            setProgress(0);
        }
    };

    const onTimeUpdate = () => {
        if (audioRef.current) {
            const progressValue =
                (audioRef.current.currentTime / audioRef.current.duration) *
                100;
            setProgress(progressValue);
        }
    };

    return (
        <div className="p-2 ">
            <h5>{isPlaying ? "Pause" : "Play"}</h5>
            <audio ref={audioRef} src={src} onTimeUpdate={onTimeUpdate}></audio>

            <div className="d-flex align-items-center">
                <button
                    className="btn btn-primary me-2"
                    onClick={togglePlayPause}
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button
                    className="btn btn-danger me-2 mx-2"
                    onClick={stopAudio}
                >
                    <FaStop />
                </button>
            </div>

            <div
                className="progress mt-2"
                style={{ height: "10px", width: "100px" }}
            >
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                ></div>
            </div>
        </div>
    );
};
