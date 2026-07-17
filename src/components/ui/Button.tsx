import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
}

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const base = "rounded-xl px-6 py-3 font-semibold transition-all duration-300";

    const styles = {
        primary: "bg-green-700 text-white hover:bg-green-800",
        secondary: "border border-green-700 text-green-700 hover:bg-green-50",
    };

    return (
        <button
            className={`${base} ${styles[variant]} ${className}`}
            {...props}
        >
            {children}

        </button>
    );
}