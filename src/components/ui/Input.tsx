import React from "react";
import { IconAlertTriangleFilled } from '@tabler/icons-react';

interface InputProps {
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
    name: string;
    id?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    size?: "normal" | "large" | "small";
    isError?: boolean;
    errorMessage?: string;
}

export default function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    icon,
    name,
    id,
    disabled = false,
    required = false,
    className = "",
    size = "normal",
    isError = false,
    errorMessage = ""
}: InputProps) {
    const inputSize = size === "large" ? "px-4 py-2" : size === "normal" ? "px-3 py-1.5 text-sm" : "px-2 py-1 text-xs"
    return (
        <>
            <div className={`flex items-center gap-2 w-full rounded-md ${isError ? "border-2 border-red-500 focus-within:ring-red-500" : "border border-slate-400 focus-within:ring-blue-500"} bg-white ${inputSize} text-slate-700 
            outline-none focus-within:ring-2 focus-within:border-transparent
            ${disabled ? "opacity-60 cursor-not-allowed bg-slate-50" : ""} ${className}`}>
                {icon && (
                    <span className="shrink-0 text-slate-400">{icon}</span>
                )}

                <input
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    className="w-full bg-transparent outline-none placeholder:text-slate-400 disabled:cursor-not-allowed"
                />
            </div>
            {isError && (
                <div className="flex gap-1 text-red-600 mt-1.5">
                    <span><IconAlertTriangleFilled size={16} /></span>
                    <p className="text-xs">{errorMessage}</p>
                </div>
            )}
        </>
    );
}