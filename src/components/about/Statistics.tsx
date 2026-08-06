import { Users, ShoppingCart, Package, MapPinned } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "5,000+",
        label: "Happy Customers",
    },
    {
        icon: ShoppingCart,
        value: "10,000+",
        label: "Orders Delivered",
    },
    {
        icon: Package,
        value: "100+",
        label: "Premium Products",
    },
    {
        icon: MapPinned,
        value: "All",
        label: "Serving Bahrain",
    },
];

export default function Statistics() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        Our Achievements
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                        Trusted By
                        <span className="block text-green-700">
                            Thousands Of Customers
                        </span>
                    </h2>

                    <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                        We continue to grow by providing quality products,
                        reliable delivery, and outstanding customer service
                        throughout Bahrain.
                    </p>

                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.label}
                                className="group rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-6 text-4xl font-extrabold text-gray-900">
                                    {item.value}
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}