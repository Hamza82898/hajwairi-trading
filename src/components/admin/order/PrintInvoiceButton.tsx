"use client";

import { Printer } from "lucide-react";


export default function PrintInvoiceButton() {
    function handlePrint() {
        window.print();
    }
    return (
        <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-xl border px-5 py-3 font-medium transition hover:bg-gray-100"
        >
            <Printer size={18} />
            Print Invoice
        </button>
    );
    
}