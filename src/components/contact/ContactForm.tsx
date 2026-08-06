"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
    return (
        <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                <div className="mb-12 text-center">

                    <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        Send us a Message
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        We'd Love To Hear From You
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                        Fill out the form below and our team will get back to
                        you as soon as possible.
                    </p>

                </div>

                <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">

                    <form className="space-y-6">

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    placeholder="+973 XXXXXXXX"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Message
                            </label>

                            <textarea
                                rows={6}
                                placeholder="Write your message..."
                                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />

                        </div>

                        <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800 sm:w-auto"
                        >
                            <Send size={20} />
                            Send Message
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}