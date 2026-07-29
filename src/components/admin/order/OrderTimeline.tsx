import { OrderStatus } from "@prisma/client";
import { CheckCircle2, Circle, Clock3 } from "lucide-react";

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
    const currentIndex = steps.indexOf(status as any);

    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
                Order Timeline
            </h2>

            <div className="space-y-5">
                {steps.map((step, index) => {
                    const completed = index < currentIndex;
                    const active = index === currentIndex;

                    return (
                        <div
                            key={step}
                            className="flex items-center gap-4"
                        >
                            {completed ? (
                                <CheckCircle2 
                                    className="text-green-600"
                                    size={24}
                                />
                            ) : active ? (
                                <Clock3 
                                    className="text-yellow-600"
                                    size={24}
                                />
                            ) : (
                                <Circle 
                                    className="text-gray-300"
                                    size={24}
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
                                {step}
                            </span>

                        </div>
                    );
                })}

            </div>
        </div>
    );
}