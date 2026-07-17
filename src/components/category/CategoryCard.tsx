import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types/category";

interface CategoryCardProps {
    category: Category;
}

export default function CategoryCard({
    category,
}: CategoryCardProps) {
    return (
        <Link href={`/shop?category=${category.slug}`}>

            <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative mx-aut0 h-24 w-24">

                    <Image 
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-contain"
                    />
                </div>

                <h3 className="mt-5 text-center text-lg font-semibold">
                    {category.name}
                </h3>

            </div>
        
        </Link>
    );
}