import  { getActiveCategories } from "@/lib/category/queries";
import CategoryCard from "@/components/category/CategoryCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default async function Categories() {
    const categories = await getActiveCategories();

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-24">

            <div className="mx-auto max-w-7xl px-6">

                <SectionTitle 
                    title="Shop by Category"
                    subtitle="Browse fresh groceries, fruits, vegetables and daily essentials."
                />

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

                    {categories.map((category) => (
                        <CategoryCard 
                            key={category.id}
                            category={category}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}