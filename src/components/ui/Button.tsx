import React from "react";

interface ButtonProps {
    label: string;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "primary-red" | "secondary" | "secondary-red" | "custom";
    loadingType?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    iconOnly?: boolean;
    size?: "normal" | "large";
}

export default function Button({
    label,
    type = "button",
    variant = "primary",
    loadingType = false,
    icon,
    iconPosition = "left",
    onClick,
    disabled,
    iconOnly = false,
    className = "",
    size = "normal"
}: ButtonProps) {
    const baseClass =`inline-flex items-center justify-center ${iconOnly ? "" : "gap-1.5"} rounded-md ${size === "large" ? "px-4 py-3" : "px-3 py-1.5 text-sm"} cursor-pointer transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed`;

    const variantClass = variant === "primary" ? "text-white bg-blue-600 hover:bg-blue-500" : variant === "primary-red" ? "text-white bg-red-600 hover:bg-red-500" : variant === "secondary-red" ? "text-red-600 bg-white border border-red-400 hover:bg-red-100" : variant === "secondary" ? "text-slate-700 bg-white border border-slate-300 hover:bg-slate-100" : "";

    const isDisabled = disabled || loadingType;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={`${baseClass} ${variantClass} ${className}`}
        >
            {loadingType && (
                <svg
                    className="animate-spin h-4 w-4 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                </svg>
            )}

            {!loadingType && icon && iconPosition === "left" && (
                <span className="shrink-0">{icon}</span>
            )}

            <span>{loadingType ? "Loading..." : label}</span>
            {!loadingType && icon && iconPosition === "right" && (
                <span className="shrink-0">{icon}</span>
            )}
        </button>
    );
}