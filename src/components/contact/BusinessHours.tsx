import { Clock3, CalendarDays } from "lucide-react";

export default function BusinessHours() {
    const schedule = [
        {
            day: "Monday",
            time: "08:00 AM - 09:00 PM",
        },
        {
            day: "Tuesday",
            time: "08:00 AM - 09:00 PM",
        },
        {
            day: "Wednesday",
            time: "08:00 AM - 09:00 PM",
        },
        {
            day: "Thursday",
            time: "08:00 AM - 09:00 PM",
        },
        {
            day: "Friday",
            time: "08:00 AM - 09:00 PM",
        },
        {
            day: "Saturday",
            time: "08:00 AM - 09:00 PM",
        },
        {
            day: "Sunday",
            time: "08:00 AM - 09:00 PM",
        },
    ];

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                <div className="mb-14 text-center">

                    <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        Working Hours
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Business Hours
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                        We are available throughout the week to serve you
                        with fresh products and fast delivery.
                    </p>

                </div>

                <div className="overflow-hidden rounded-3xl border bg-white shadow-lg">

                    <div className="flex items-center gap-3 border-b bg-green-700 px-6 py-5">

                        <Clock3
                            size={24}
                            className="text-white"
                        />

                        <h3 className="text-xl font-bold text-white">
                            Opening Schedule
                        </h3>

                    </div>

                    <div className="divide-y">

                        {schedule.map((item) => (
                            <div
                                key={item.day}
                                className="flex flex-col items-start justify-between gap-2 px-6 py-5 transition hover:bg-gray-50 sm:flex-row sm:items-center"
                            >
                                <div className="flex items-center gap-3">

                                    <CalendarDays
                                        size={20}
                                        className="text-green-700"
                                    />

                                    <span className="font-semibold text-gray-800">
                                        {item.day}
                                    </span>

                                </div>

                                <span className="font-medium text-gray-600">
                                    {item.time}
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}