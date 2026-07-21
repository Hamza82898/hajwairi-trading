import CategoryForm from "@/components/admin/category/CategoryForm";

export default function NewCategoryPage() {
    return (
        <main>
            <div className="mb-8">
                <h1 className="text-4xl font-bold">
                    New Category
                </h1>
            </div>

            <CategoryForm />
        </main>
    );
}