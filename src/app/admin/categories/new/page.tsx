import CategoryForm from "@/components/admin/category/CategoryForm";

export default function NewCategoryPage() {
    return (
        <main className="space-y-6 lg:space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    New Category
                </h1>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    Create a new category.
                </p>
            </div>

            <CategoryForm />
        </main>
    );
}