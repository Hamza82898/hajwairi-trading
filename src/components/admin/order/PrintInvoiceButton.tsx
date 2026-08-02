"use client";

import { Printer } from "lucide-react";


export default function PrintInvoiceButton() {
    function handlePrint() {
        window.print();
    }
    return (
        <button
            type="button"
            aria-label="Print Invoice"
            onClick={handlePrint}
            className="flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all hover:bg-gray-100 hover:shadow-md active:scale-[0.98] sm:w-auto"
        >
            <Printer size={20} />
            Print Invoice
        </button>
    );
    
}