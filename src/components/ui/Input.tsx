import React from "react";

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
}: InputProps) {
    return (
        <div className={`flex items-center gap-2 w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 
            focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent
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
    );
}