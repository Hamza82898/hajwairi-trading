export interface Product {
    id: number;
    slug: string;

    name: string;
    description: string;

    category: string;
    brand: string;
    origin: string;

    images: string[];

    oldPrice: number;
    newPrice: number;

    unit: string;

    rating: number;
    reviews: number;

    inStock: boolean;
    stock: number;

    badge: string;

    tags: string[];

    featured: boolean;

    discount: number;
}