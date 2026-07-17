import { Product } from "@/types/product";

export default function searchProducts(
    products: Product[],
    query: string,
): Product[] {
    if (!query.trim()) return products;

    const search = query.toLowerCase();

    return products.filter((product) => {
        return (
            product.name.toLowerCase().includes(search) ||

            product.category.toLowerCase().includes(search) ||

            product.brand.toLowerCase().includes(search) ||

            product.origin.toLowerCase().includes(search) ||

            product.tags.some(tage =>
                tage.toLowerCase().includes(search)
            )
        );
    });
}