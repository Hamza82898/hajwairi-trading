"use client";

export default function PrintInvoiceButton() {
    return (
        <button
            onClick={() => window.print()}
            className="rounded-xl border px-8 py-3 font-semibold hover:bg-gray-100"
        >
            Print Invoice
        </button>
    );
}