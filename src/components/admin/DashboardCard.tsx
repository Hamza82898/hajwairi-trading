interface DashboardCardProps {
    title: string;
    value: number | string;
    color?: string;
}

export default function DashboardCard({
    title,
    value,
    color = "bg-green-700",
}: DashboardCardProps) {
    return (
        <div className="rounded-xl bg-white p-4 shadow transition hover:shadow-lg sm:p-6">
            <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-white sm:h-12 sm:w-12 sm:text-xl ${color}`}
            >
                #
            </div>

            <h3 className="text-sm text-gray-500 sm:text-base">
                {title}
            </h3>

            <p className="mt-2 break-words text-2xl font-bold sm:text-3xl">
                {value}
            </p>
        </div>
    );
}