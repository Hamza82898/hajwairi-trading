"use client";

export default function PrintInvoiceButton() {
    return (
        <button
            onClick={() => window.print()}
            className="w-full rounded-xl border px-8 py-3 text-center font-semibold transition hover:bg-gray-100 sm:w-auto"
        >
            Print Invoice
        </button>
    );
}