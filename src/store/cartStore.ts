import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AddToCartItem, CartItem } from "@/types/cart";

interface CartStore {
    cart: CartItem[];

    addToCart: (
        item: AddToCartItem,
        quantity?: number
    ) => void;

    removeFromCart: (id: number) => void;

    increaseQuantity: (id: number) => void;

    decreaseQuantity: (id: number) => void;

    clearCart: () => void;

    getSubtotal: () => number;

    getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (item, quantity = 1) =>
                set((state) => {
                    const existing = state.cart.find(
                        (cartItem) => cartItem.id === item.id
                    );

                    if (existing) {
                        return {
                            cart: state.cart.map((cartItem) =>
                                cartItem.id === item.id
                                    ? {
                                          ...cartItem,
                                          quantity:
                                              cartItem.quantity + quantity,
                                      }
                                    : cartItem
                            ),
                        };
                    }

                    return {
                        cart: [
                            ...state.cart,
                            {
                                ...item,
                                quantity,
                            },
                        ],
                    };
                }),

            removeFromCart: (id) =>
                set((state) => ({
                    cart: state.cart.filter(
                        (item) => item.id !== id
                    ),
                })),

            increaseQuantity: (id) =>
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === id
                            ? {
                                  ...item,
                                  quantity: item.quantity + 1,
                              }
                            : item
                    ),
                })),

            decreaseQuantity: (id) =>
                set((state) => ({
                    cart: state.cart
                        .map((item) =>
                            item.id === id
                                ? {
                                      ...item,
                                      quantity:
                                          item.quantity - 1,
                                  }
                                : item
                        )
                        .filter(
                            (item) => item.quantity > 0
                        ),
                })),

            clearCart: () => set({ cart: [] }),

            getSubtotal: () => {
                return get().cart.reduce(
                    (total, item) =>
                        total +
                        item.price * item.quantity,
                    0
                );
            },

            getTotalItems: () => {
                return get().cart.reduce(
                    (total, item) =>
                        total + item.quantity,
                    0
                );
            },
        }),
        {
            name: "hajwairi-cart",
        }
    )
);