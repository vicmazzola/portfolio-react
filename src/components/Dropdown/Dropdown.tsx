import React, { useState, useEffect, useRef } from "react";


interface DropdownProps {
    options: { label: string; value: string | null }[];
    onSelect: (value: string | null) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (value: string | null) => {
        onSelect(value);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button
                className="btn btn-primary"
                onClick={() => setIsOpen(!isOpen)}
            >
                Filter Projects
            </button>
            {isOpen && (
                <ul className="dropdown-content menu bg-white text-black rounded-box z-[1] w-35 p-2 shadow">
                    {options.map((option) => (
                        <li key={option.value || "all"}>
                            <button
                                className="text-left w-full"
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
