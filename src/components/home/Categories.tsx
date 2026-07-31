import { getActiveCategories } from "@/lib/category/queries";
import CategoryCard from "@/components/category/CategoryCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default async function Categories() {
    const categories = await getActiveCategories();

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-24">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <SectionTitle
                    title="Shop by Category"
                    subtitle="Browse fresh groceries, fruits, vegetables and daily essentials."
                />

                <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:mt-14 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">

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