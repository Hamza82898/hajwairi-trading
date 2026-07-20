import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Seeding Database...");

    //Delete old data
    await prisma.productImage.deleteMany();
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    // Categories
    const fruits = await prisma.category.create({
        data: {
            name: "Fruits",
            slug: "fruits",
            image: "/categories/fruits.jpg",
        },
    });

    const vegetables = await prisma.category.create({
        data: {
            name: "Vegetables",
            slug: "vegetables",
            image: "/categories/vegetables.jpg",
        },
    });

    const grocery = await prisma.category.create({
        data: {
            name: "Grocery",
            slug: "grocery",
            image: "/categories/grocery.jpg",
        },
    });

    // Product 1
    const mango = await prisma.product.create({
        data: {
            name: "Pakistani Chaunsa Mango",
            slug: "pakistani-chaunsa-mango",
            description: 
                "Premium quality Pakistani Chaunsa Mango imported fresh to Bahrain.",
            oldPrice: 7.50,
            newPrice: 6.50,
            unit: "4 KG",
            brand: "Hajwairi Trading",
            origin: "Pakistan",
            stock: 100,
            featured: true,
            badge: "20% OFF",
            discount: 20,
            rating: 5,
            reviews: 124,
            categoryId: fruits.id,
        },
    });

    await prisma.productImage.createMany({
        data: [
            {
                url: "/products/fruits/chaunsa-mango.png",
                isPrimary: true,
                productId: mango.id,
            },
            {
                url: "/products/fruits/chaunsa-mango.png",
                productId: mango.id,
            },
        ],
    });

    const jamun = await prisma.product.create({
        data: {
            name: "Fresh Jamun",
            slug: "fresh-jamun",
            description: "Fresh Pakistani Jamun.",
            oldPrice: 3.50,
            newPrice: 3.00,
            unit: "1 KG",
            brand: "Hajwairi Trading",
            origin: "Pakistan",
            stock: 80,
            featured: true,
            badge: "NEW",
            discount: 15,
            rating: 5,
            reviews: 65,
            categoryId: fruits.id,
        },
    });

    await prisma.productImage.createMany({
        data: [
            {
                url: "/products/fruits/jamun.png",
                isPrimary: true,
                productId: jamun.id,
            },
        ],
    });

    console.log("✅ Database Seeded Successfully.")
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });