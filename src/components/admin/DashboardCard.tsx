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
        <div className="rounded-xl bg-white p-6 shadow">
            <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold text-white ${color}`}
            >
                #
            </div>

            <h3 className="text-gray-500">
                {title}
            </h3>

            <p className="mt-2 text-3xl font-bold">
                {value}
            </p>
        </div>
    );
}