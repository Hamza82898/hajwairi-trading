import { create } from "zustand";

export interface CheckoutData {
    fullName: string;
    phone: string;
    email: string;
    area: string;
    block: string;
    road: string;
    building: string;
    flat: string;
    landmark?: string;
    notes?: string
    paymentMethod: "cash" | "benefitpay";
}

interface CheckoutStore {
    data: CheckoutData;

    setCheckoutData: (data: CheckoutData) => void;

    clearCheckout: () => void;
}

const initialData: CheckoutData = {
    fullName: "",
    phone: "",
    email: "",

    area: "",
    block: "",
    road: "",
    building: "",
    flat: "",

    landmark: "",
    notes: "",
    paymentMethod: "cash",
};

export const useCheckoutStore = create<CheckoutStore>((set) => ({
    data: initialData,

    setCheckoutData: (data) =>
        set({
            data,
        }),

        clearCheckout: () =>
            set({
                data: initialData
            }),
}));