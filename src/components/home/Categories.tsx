import { categories } from "@/data/categories";
import CategoryCard from "@/components/category/CategoryCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Categories() {
    return (
        <section className="py-20">

            <div className="mx-auto max-w-7xl px-6">

                <SectionTitle 
                    title = "Shop by Category"
                    subtitle= "Browse our fresh products by category."
                />

                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
                    {categories.map((category) => (

                        <CategoryCard 
                            key = {category.id}
                            category = {category}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}