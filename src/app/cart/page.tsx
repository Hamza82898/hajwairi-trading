"use client"



import { useCartStore } from "@/store/cartStore";
import EmptyCard from "@/components/cart/EmptyCart";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";


export default function CartPage() {
    const cart = useCartStore((state) => state.cart);

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const delivery = subtotal > 20 ? 0 : 1.5;

    if (cart.length === 0) {
        return (
            <main className="mx-auto max-w-7xl px-6 py-10">
                <EmptyCard />
            </main>
        );
    }


    return (
        <main className="mx-auto max-w-7xl px-6 py-10">
            <h1 className="mb-10 text-4xl font-bold">
                Shopping Cart
            </h1>

            <div className="grid gap-8 lg:grid-cols-3">

                {/*Left Side*/}

                <div className="space-y-6 lg:col-span-2">

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

                <div>
                    <CartSummary 
                        subtotal={subtotal}
                        delivery={delivery}
                    />
                </div>

            </div>

        </main>
    );
}