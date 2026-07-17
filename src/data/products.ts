import { Product } from "@/types/product";
import { disconnect } from "process";

export const products: Product[] = [
    {
        id: 1,

        slug: "pakistani-chaunsa-mango",

        name: "Pakistani Chaunsa Mango",

        description: 
            "Premium quality Pakistani Chaunsa Mango imported fresh for customers across Bahrain.",

        category: "Fruits",

        brand: "Hajwairi Trading",

        origin: "Pakistan",

        images: [
            "/products/fruits/chaunsa-mango.png",
            "/products/fruits/chaunsa-mango.png",
            "/products/fruits/chaunsa-mango.png",
            "/products/fruits/chaunsa-mango.png",
        ],

        oldPrice: 7.50,

        newPrice: 6.30,

        unit: "4 KG",

        rating: 5,

        reviews: 124,

        inStock: true,

        stock: 100,

        badge: "20% OFF",

        featured: true,

        discount: 20,

        tags: [
            "Fresh",
            "Sweet",
            "Premium",
            "Pakistan"
        ],

       
    },

    {
        id: 2,

        slug: "fresh-jamun",

        name: "Fresh Jamun",

        description: 
            "Fresh Pakistani Jamun imported for Bahrain customers.",

        category: "Fruits",

        brand: "Hajwairi Trading",

        origin: "Pakistan",

        images: [
            "/products/fruits/jamun.png",
            "/products/fruits/jamun.png",
            "/products/fruits/jamun.png",
            "/products/fruits/jamun.png",
        ],

        oldPrice: 3.50,

        newPrice: 3.00,

        unit: "1 KG",

        rating: 5,

        reviews: 72,

        inStock: true,

        stock: 60,

        badge: "BEST SELLER",

        featured: true,

        discount: 14,

        tags: [
            "Fresh",
            "Premium",
            "Pakistan"
        ],

   
    },
];