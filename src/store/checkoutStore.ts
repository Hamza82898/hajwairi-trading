import { create } from "zustand";

export interface CheckoutData {
    fullName: string;
    phone: string;
    area: string;
    address: string;
    landmark?: string;
    paymentMethod: "cash" | "benefitpay";
}

interface CheckoutStore {
    data: CheckoutData;

    setCheckoutData: (data: CheckoutData) => void;

    clearCheckout: () => void;
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
    data: {
        fullName: "",
        phone: "",
        area: "",
        address: "",
        landmark: "",
        paymentMethod: "cash",
    },

    setCheckoutData: (data) =>
        set({
            data,
        }),

        clearCheckout: () =>
            set({
                data: {
                    fullName: "",
                    phone: "",
                    area: "",
                    address: "",
                    landmark: "",
                    paymentMethod: "cash",
                },
            }),
}));