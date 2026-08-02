import { OrderStatus } from "@prisma/client";
import { CheckCircle2, Circle, Clock3, XCircle } from "lucide-react";

interface Props {
    status: OrderStatus;
}

const steps = [
    "PENDING",
    "CONFIRMED",
    "PROCESSING",
    "SHIPPED",
    "DELIVERED",
] as const;

export default function OrderTimeline({
    status,
}: Props) {
    const cancelled = status === OrderStatus.CANCELLED;

    const currentIndex = cancelled
        ? -1
        : steps.indexOf(status as (typeof steps)[number]);

    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
                Order Timeline
            </h2>

            <div className="space-y-3">
                {steps.map((step, index) => {
                    const completed = !cancelled && index < currentIndex;
                    const active = !cancelled && index === currentIndex;

                    return (
                        <div
                            key={step}
                            className={`flex items-center gap-4 rounded-lg p-3 transition ${
                                completed
                                    ? "bg-green-50"
                                    : active
                                    ? "bg-yellow-50"
                                    : ""
                            }`}
                        >
                            {completed ? (
                                <CheckCircle2 
                                    className="text-green-600"
                                    size={22}
                                />
                            ) : active ? (
                                <Clock3 
                                    className="text-yellow-600"
                                    size={22}
                                />
                            ) : (
                                <Circle 
                                    className="text-gray-300"
                                    size={22}
                                />
                            )}

                            <span
                                className={`font-medium ${
                                    completed
                                        ? "text-green-700"
                                        : active
                                        ? "text-yellow-700"
                                        : "text-gray-400"
                                }`} 
                            >
                                {step.charAt(0) +
                                    step.slice(1).toLowerCase()}
                            </span>
                        </div>
                    );
                })}

            </div>

            {cancelled && (
                <div className="mt-6 rounded-xl border border-red-300 bg-red-50 p-4">
                    <div className="flex items-center gap-3">
                        <XCircle 
                            size={22}
                            className="text-red-600"
                        />

                        <div>
                            <p className="font-semibold text-red-700">
                                Order Cancelled
                            </p>

                            <p className="mt-1 text-sm text-red-600">
                                This order has been cancelled and will not
                                proceed further.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}