import Link from "next/link";
import { Phone, Mail, MapPin, } from "lucide-react";
import { FaFacebookF, FaInstagram, } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-12 bg-gray-900 text-white sm:mt-16 lg:mt-20">

            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Company */}

                    <div>

                        <h2 className="mb-4 text-2xl font-bold text-green-400">
                            Hajwairi Trading Co. W.L.L.
                        </h2>

                        <p className="leading-7 text-gray-400">
                            Fresh Fruits, Vegetables, Grocery &
                            Daily Essentials delivered across Bahrain.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <a
                                href="#"
                                className="rounded-full bg-gray-800 p-3 transition hover:bg-green-700"
                            >
                                <FaFacebookF size={18} />
                            </a>

                            <a
                                href="https://instagram.com/hajwairitradingcompany"
                                target="_blank"
                                className="rounded-full bg-gray-800 p-3 transition hover:bg-pink-600"
                            >
                                <FaInstagram size={18} />
                            </a>

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="mb-4 text-lg font-semibold">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-400">

                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-white"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/shop"
                                    className="transition hover:text-white"
                                >
                                    Shop
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="transition hover:text-white"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="transition hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Categories */}

                    <div>

                        <h3 className="mb-4 text-lg font-semibold">
                            Categories
                        </h3>

                        <ul className="space-y-3 text-gray-400">

                            <li>Fresh Fruits</li>
                            <li>Vegetables</li>
                            <li>Dry Items</li>
                            <li>Snacks</li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="mb-4 text-lg font-semibold">
                            Contact
                        </h3>

                        <div className="space-y-4 text-gray-400">

                            <div className="flex items-start gap-3">
                                <MapPin 
                                    size={18}
                                    className="mt-1 text-green-400"
                                />
                                <p>
                                    Building 133, Road 101,
                                    Block 104, Hidd, Bahrain
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone 
                                    size={18}
                                    className="text-green-400"
                                />
                                <a
                                    href="tel:+97339032710"
                                    className="transition hover:text-white"
                                >
                                    +973 3903 2710
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail 
                                    size={18}
                                    className="text-green-400"
                                />
                                <a
                                    href="mailto:info@hajwairitrading.com"
                                    className="break-all transition hover:text-white"
                                >
                                    info@hajwairitrading.com
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="border-t border-gray-700 px-4 py-5 text-center text-xs text-gray-400 sm:text-sm">

                © 2026 Hajwairi Trading Co. W.L.L.
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>
                All Rights Reserved.

            </div>

        </footer>
    );
}