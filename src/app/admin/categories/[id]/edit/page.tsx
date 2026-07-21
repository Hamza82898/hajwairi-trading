import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CategoryForm from "@/components/admin/category/CategoryForm";
import ImageUploader from "@/components/admin/shared/ImageUploader";
import { ca } from "zod/locales";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditCategoryPage({
    params,
}: Props) {
    const { id } = await params;

    const category = await prisma.category.findUnique({
        where: {
            id: Number(id),
        },
    });

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

            <section className="space-y-5">
                <h2 className="text-2xl font-semibold">
                    Category Image
                </h2>

                <ImageUploader 
                    entityId={category.id}
                    type="category"
                />

                {category.image && (
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
                )}
            </section>

        </main>
    );
}