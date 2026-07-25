const stats = [
    {
        number: "5000+",
        label: "Happy Customers",
    },
    {
        number: "250+",
        label: "Fresh Products",
    },
    {
        number: "4.9★",
        label: "Customer Rating",
    },
];

export default function HeroStats() {
    return (
        <div className="grid grid-cols-3 gap-5 pt-4">

            {stats.map((item) => (
                <div
                    key={item.label}
                    className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                    <h3 className="text-3xl font-black text-green-900">
                        {item.number}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-gray-500">
                        {item.label}
                    </p>
                </div>
            ))}

        </div>
    );
}