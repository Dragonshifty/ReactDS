import { useState } from "react";

export const ImageHandler: React.FC<{ trackSourceName: string }> = ({
    trackSourceName,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleImageClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="p-1 border">
                <img
                    className="img-fluid fancy-image"
                    onClick={handleImageClick}
                    src={trackSourceName}
                    height="300"
                    width="300"
                    alt=""
                />
            </div>
            {isOpen && (
                <div
                    className="lightbox-image lightbox"
                    onClick={handleImageClick}
                >
                    <img src={trackSourceName} alt="Enlarged" />
                    <span className="close-btn">&times;</span>
                </div>
            )}
        </>
    );
};
