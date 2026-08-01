"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { CheckoutFormData } from "@/lib/validations/checkout";
import { useCheckoutStore } from "@/store/checkoutStore";
import { useCartStore } from "@/store/cartStore"
import { placeOrder } from "@/actions/order";
import { PlaceOrderInput } from "@/types/order";


export default function OrderSummary() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

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

    const delivery = subtotal > 20 ? 0 : 1.0;

    const total = subtotal + delivery;

    const submitOrder = async (
        values: CheckoutFormData
    ) => {
        setLoading(true);
        try {
            setCheckoutData(values);

            const orderData: PlaceOrderInput = {
                customer: values,

                cart: cart.map((item) => ({
                    productId: item.id,
                    quantity: item.quantity,
                    price: item.price,
                })),
            };

            const result = await placeOrder(orderData);

            if (!result.success) {
                alert(result.message);
                return;
            }

            clearCart();
            clearCheckout();

            router.push(`/checkout/success/${result.orderId}`);
        } catch (error) {
            console.error(error);
            alert("Something went wrong while placeing your order.");
        } finally {
            setLoading(false);
        }
    };
        

    return (
        <div className="rounded-2xl border bg-white p-5 shadow-sm lg:sticky lg:top-28 sm:p-6">

            <h2 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">
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
                            className="flex items-start justify-between gap-4"
                        >
                            <span className="flex-1 text-sm sm:text-base">
                                {item.name} x {item.quantity}
                            </span>

                            <span className="whitespace-nowrap text-sm font-semibold sm:text-base">
                                {(item.price * item.quantity).toFixed(2)} BD
                            </span>

                        </div>
                    ))

                )}

                <hr />

                <div className="flex justify-between text-sm sm:text-base">
                    <span>Subtotal</span>
                    <span>{subtotal.toFixed(2)} BD</span>
                </div>

                <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>
                        {delivery.toFixed(2)} BD
                    </span>
                </div>

                {/*Coupon*/}

                <hr />

                <div className="flex justify-between text-lg font-bold sm:text-xl">
                    <span>Total</span>

                    <span>{total.toFixed(2)} BD</span>
                </div>

            </div>

            {/*Secure Checkout*/}

            <div className="mt-6 rounded-xl bg-green-50 p-4">
                <div className="flex items-center gap-2">
                    <ShieldCheck 
                        size={20}
                        className="text-green-700"
                    />

                    <span className="font-semibold text-green-700">
                        Secure Checkout
                    </span>
                </div>

                <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                    Your personal information is encrypted and securely protected.
                </p>
            </div>

            {/*Terms*/}

            <label className="mt-6 flex items-start gap-3 text-sm">
                <input 
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) =>
                        setAcceptedTerms(e.target.checked)
                    }
                    className="mt-1"
                />

                <span className="text-sm text-gray-600">
                    I agree to the Terms & Conditions and Privacy Policy.
                </span>
            </label>

            <button 
                type="button"
                onClick={handleSubmit(submitOrder)}
                disabled={loading || cart.length === 0 || !acceptedTerms}
                className="mt-6 w-full rounded-xl bg-green-700 py-3 text-base font-semibold text-white transition hover:bg-green-800 sm:py-4 sm:text-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
                {loading ? "Placing Order..." : "Place Order"}
            </button>

        </div>
    );
}