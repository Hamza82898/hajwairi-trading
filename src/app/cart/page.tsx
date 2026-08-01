"use client"



import { useCartStore } from "@/store/cartStore";
import EmptyCard from "@/components/cart/EmptyCart";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";


export default function CartPage() {
    const {
        cart,
        clearCart,
        getTotalItems,
    } = useCartStore();

    const subtotal = useCartStore((state) => state.getSubtotal());

    const totalItems = getTotalItems();

    const delivery = subtotal >= 20 ? 0 : 1.0;

    const remainingForFreeDelivery =
        subtotal >= 20 ? 0 : 20 - subtotal;

    if (cart.length === 0) {
        return (
            <main className="mx-auto max-w-7xl px-6 py-10">
                <EmptyCard />
            </main>
        );
    }


    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="mb-8 flex flex-col gap-5 border-b pb-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Shopping Cart
                    </h1>

                    <p className="mt-2 text-gray-500">
                        {totalItems} Item{totalItems !== 1 ? "s" : ""} in your cart
                    </p>
                </div>

                <button
                    onClick={clearCart}
                    className="w-full rounded-xl border border-red-200 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-50 md:w-auto"
                >
                    Clear Cart
                </button>
            </div>

            <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-4 sm:p-5">
                {delivery === 0 ? (
                    <p className="font-semibold text-green-800">
                        Congratulations! You unlocked FREE Delivery.
                    </p>
                ) : (
                    <>
                        <p className="font-medium text-green-800">
                            Spend{" "}
                            <span className="font-bold">
                                BD {remainingForFreeDelivery.toFixed(2)}
                            </span>{" "}
                            more to unlock FREE Delivery.
                        </p>

                        <div className="mt-4 h-3 overflow-hidden rounded-full bg-green-100">
                            <div 
                                className="h-full rounded-full bg-green-700 transition-all duration-500"
                                style={{
                                    width: `${Math.min(
                                        (subtotal / 20) * 100,
                                        100
                                    )}%`,
                                }}
                            />
                        </div>
                    </>
                )}
            </div>

            <div className="grid gap-8 lg:grid-cols-3">

                {/*Left Side*/}

                <div className="space-y-5 lg:col-span-2">

                    {cart.map((item) => (
                        <CartItem 
                            key = {item.id}
                            id = {item.id}
                            name = {item.name}
                            image = {item.image}
                            price = {item.price}
                            quantity = {item.quantity}
                        />
                    ))}

                </div>

                {/*Right Side*/}

                <div className="lg:sticky lg:top-28 lg:self-start">
                    <CartSummary 
                        subtotal={subtotal}
                    />
                </div>

            </div>

        </main>
    );
}