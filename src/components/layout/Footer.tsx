import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 bg-gray-900 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
                {/* Company */}
                <div>
                    <h2 className="mb-4 text-2xl font-bold text-green-400">
                        Hajwairi Trading Co. W.L.L.
                    </h2>

                    <p className="text-gray-400">
                        Fresh Fruits, Vegetables, Grocery & Daily Essentials delivered across Bahrain.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>

                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-semibold">Categories</h3>

                    <ul className="space-y-2 text-gray-400">
                        <li>Fresh Fruits</li>
                        <li>Vegetables</li>
                        <li>Dry Items</li>
                        <li>Snacks</li>

                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-semibold">Contact</h3>

                    <p className="mt-2 text-gray-400">
                        📍Building 133, Road 101, Block 104, Hidd-Bahrain
                    </p>

                    <p className="mt-2 text-gray-400">
                        📞 +973 3903 2710
                    </p>

                    <p className="mt-2 text-gray-400">
                        ✉️ info@hajwairitrading.com
                    </p>
                </div>

            </div>

            <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-400">
                © 2026 Hajwairi Trading Co. W.L.L. All Rights Reserved.
            </div>
        </footer>
    );
}