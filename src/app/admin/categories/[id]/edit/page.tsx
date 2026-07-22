import { notFound } from "next/navigation";
import { getCategoryById } from "@/lib/category/queries";
import CategoryForm from "@/components/admin/category/CategoryForm";
import ImageUploader from "@/components/admin/shared/ImageUploader";
import DeleteCategoryButton from "@/components/admin/category/DeleteCategoryButton";
import DeleteCategoryImageButton from "@/components/admin/category/DeleteCategoryImageButton";



interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditCategoryPage({
    params,
}: Props) {
    const { id } = await params;

    const category = await getCategoryById(Number(id));

    if (!category) {
        notFound();
    }

    return (
        <main className="space-y-10">
            <div>
                <h1 className="text-4xl font-bold">
                    Edit Category
                </h1>

                <p className="mt-2 text-gray-500">
                    Update category information.
                </p>
            </div>

            <CategoryForm 
                category={category}
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">
                    Category Image
                </h2>

                <ImageUploader 
                    entityId={category.id}
                    type="category"
                    multiple={false}
                />

                {category.image && (
                    
                    <div className="space-y-4">
                        <div className="max-w-xs overflow-hidden rounded-xl border bg-white shadow">
                            <img 
                                src={category.image}
                                alt={category.name}
                                className="aspect-square w-full object-cover"
                            />

                            <div className="border-t p-3 text-center text-sm text-gray-500">
                                Current Category Image
                            </div>
                        </div>

                        <DeleteCategoryImageButton 
                            categoryId={category.id}
                        />
                    </div>
                )}
            </section>
        </main>
    );
}