"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

import { CheckoutFormData } from "@/lib/validations/checkout";
import { useCheckoutStore } from "@/store/checkoutStore";
import { useCartStore } from "@/store/cartStore"


export default function OrderSummary() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);

    const setCheckoutData = useCheckoutStore(
        (state) => state.setCheckoutData
    );

    const clearCheckout = useCheckoutStore(
        (state) => state.clearCheckout
    );

    const { handleSubmit } =
        useFormContext<CheckoutFormData>();
    
    
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const delivery = subtotal > 20 ? 0 : 1.5;

    const total = subtotal + delivery;

    const placeOrder = async (
        values: CheckoutFormData
    ) => {
        setLoading(true);
        setCheckoutData(values);

        console.log("Order Data", {
            customer: values,
            cart,
            subtotal,
            delivery,
            total,
        });

        await new Promise((resolve) => 
            setTimeout(resolve, 1500)
        );

        clearCart();
        clearCheckout();
        router.push("/checkout/success");
    };

    return (
        <div className="sticky top-28 rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">
                Order Summary
            </h2>

            <div className="space-y-4">

                {cart.length === 0 ? (
                    <p className="text-center text-gray-500">
                        Your cart is empty.
                    </p>
                ) : (

                    cart.map((item) => (
                        <div
                            key = {item.id}
                            className="flex justify-between"
                        >
                            <span>
                                {item.name} x {item.quantity}
                            </span>

                            <span>
                                {(item.price * item.quantity).toFixed(2)} BD
                            </span>

                        </div>
                    ))

                )}

                <hr />

                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{subtotal.toFixed(2)} BD</span>
                </div>

                <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>
                        {delivery === 0
                            ? "Free"
                            : `${delivery.toFixed(2)} BD`}
                    </span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>

                    <span>{total.toFixed(2)} BD</span>
                </div>

            </div>

            <button 
                onClick={handleSubmit(placeOrder)}
                disabled={loading || cart.length === 0}
                className="mt-8 w-full rounded-xl bg-green-700 py-4 font-semibold text-white transition hover:bg-green-800"
            >
                {loading ? "Placing Order..." : "Place Order"}
            </button>

            

        </div>
    );
}