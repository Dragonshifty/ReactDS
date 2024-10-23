import React, { useState } from "react";

interface PaginationProps {
    page: string;
    onPageChange: (page: string) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    page,
    onPageChange,
}) => {
    const [selectedOption, setSelectedOption] = useState(page || "option1");

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedPage = event.target.id;
        setSelectedOption(selectedPage);
        onPageChange(selectedPage);
    };

    return (
        <div
            className="btn-group btn-group-toggle d-flex justify-content-end"
            data-toggle="buttons"
        >
            <label
                className={`btn btn-dark ${
                    selectedOption === "option1" ? "active" : ""
                }`}
            >
                <input
                    type="radio"
                    name="options"
                    id="option1"
                    autoComplete="off"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                    className="d-none"
                />
                Page One
            </label>

            <label
                className={`btn btn-dark ${
                    selectedOption === "option2" ? "active" : ""
                }`}
            >
                <input
                    type="radio"
                    name="options"
                    id="option2"
                    autoComplete="off"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                    className="d-none"
                />
                Page Two
            </label>

            <label
                className={`btn btn-dark ${
                    selectedOption === "option3" ? "active" : ""
                }`}
            >
                <input
                    type="radio"
                    name="options"
                    id="option3"
                    autoComplete="off"
                    checked={selectedOption === "option3"}
                    onChange={handleOptionChange}
                    className="d-none"
                />
                Instrumentals
            </label>
        </div>
    );
};
