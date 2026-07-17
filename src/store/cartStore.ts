import { create } from "zustand";

interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface CartStore {
    cart: CartItem[];

    addToCart: (item: CartItem) => void;
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],

    addToCart: (item) =>
        set((state) => ({
            cart: [...state.cart, item],
        })),
}));