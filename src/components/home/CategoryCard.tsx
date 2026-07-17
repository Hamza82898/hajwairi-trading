interface Props {
    name: string;
    icon: string;
}

export default function CategoryCard({ name, icon }: Props) {
    return (
        <div className="curson-pointer rounded-2xl border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 text-5xl">{icon}</div>

            <h3 className="font-semibold text-gray-800">
                {name}
            </h3>

        </div>
    );
}