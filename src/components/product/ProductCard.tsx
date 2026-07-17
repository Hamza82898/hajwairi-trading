import Image from "next/image";
import Link from "next/link";
// import { useCartStore } from "@/store/cartStore";
import { Heart, ShoppingCart, Star, CheckCircle2, } from "lucide-react"


interface ProductCardProps {
    id: number;
    slug: string;
    name: string;
    image: string;
    oldPrice: number;
    newPrice: number;
    badge: string;
    unit: string;
    rating: number;
    inStock: boolean
}

export default function ProductCard({
    id,
    slug,
    name,
    image,
    oldPrice,
    newPrice,
    badge,
    unit,
    rating,
    inStock,
}: ProductCardProps) {
    // const { addToCart } = useCartStore();

    return (
        <Link href={`/products/${slug}`}>
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                    <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                        {badge}                    
                    </span>

                    <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow transition hover:bg-red-500 hover:text-white">
                        <Heart size={18} />
                    </button>

                    <Image 
                        src = {image}
                        alt = {name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        sizes="(max-width:768px) 100vw, 25vw"
                    />

                </div>

                <div className="p-5">
                    <h3 className="font-semibold">{name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {unit}
                    </p>

                    <div className="mt-3 flex items-center gap-1">
                        {Array.from({ length: rating }).map((_, index) => (
                            <Star 
                                key= {index}
                                size={16}
                                className="fill-yellow-400 text-yellow-400"
                            />
                        ))}

                        <span className="ml-2 text-sm text-gray-500">
                            ({rating}.0)
                        </span>

                    </div>

                    <div className="mt-3 flex items-center gap-2 text-sm text-green-700">
                        <CheckCircle2 size={18} />
                        <span>
                            {inStock ? "In Stock" : "Out of Stock"}
                        </span>

                    </div>

                    <div className="mt-2 flex items-center gap-2">
                        <span className="text-gray-400 line-through">
                            {oldPrice.toFixed(2)} BD
                        </span>

                        <span className="font-bold text-green-700">
                            {newPrice.toFixed(2)} BD
                        </span>

                    </div>

                    <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800">
                        <ShoppingCart size={18} />
                        Add to Cart
                    </button>

                </div>

            </div>
        </Link>
     
    );
}