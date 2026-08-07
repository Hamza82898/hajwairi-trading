"use client";

import { Printer } from "lucide-react";

interface Props {
    className?: string;
}

export default function PrintInvoiceButton({
    className = "",
}: Props) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <button
            type="button"
            onClick={handlePrint}
            className={`print:hidden inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${className}`}
        >
            <Printer size={18} />

            <span>Print Invoice</span>
        </button>
    );
}