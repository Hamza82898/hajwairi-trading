import CategoryForm from "@/components/admin/category/CategoryForm";

export default function NewCategoryPage() {
    return (
        <main className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold">
                    New Category
                </h1>

                <p className="mt-2 text-gray-500">
                    Create a new category.
                </p>
            </div>

            <CategoryForm />
        </main>
    );
}