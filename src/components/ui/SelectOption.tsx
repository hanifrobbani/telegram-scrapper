import React from "react";
import { IconChevronDown } from "@tabler/icons-react";

interface SelectProps {
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    icon?: React.ReactNode;
    name?: string;
    id?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    children: React.ReactNode;
}

export default function Select({
    value,
    onChange,
    icon,
    name,
    id,
    disabled = false,
    required = false,
    className = "",
    children,
}: SelectProps) {
    return (
        <div className={`relative flex items-center gap-2 w-full rounded-md border border-slate-400 bg-white px-3 py-1.5 text-sm text-slate-700
            focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent
            ${disabled ? "opacity-60 cursor-not-allowed bg-slate-50" : ""}
            ${className}`}>
            {icon && (
                <span className="shrink-0 text-slate-400">{icon}</span>
            )}

            <select
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                className="w-full bg-transparent outline-none appearance-none cursor-pointer disabled:cursor-not-allowed text-slate-700 pr-6">
                {children}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <IconChevronDown size={16} />
            </span>
        </div>
    );
}