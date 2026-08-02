import ReviewForm from "@/components/admin/reviews/ReviewForm";
import { getProductsForReview } from "@/lib/review/queries";




export default async function NewReviewPage() {
    const products = await getProductsForReview();

    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-3xl font-bold sm:text-4xl">
                    Add Review
                </h1>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    Create a new customer review.
                </p>
            </div>

            <ReviewForm products={products} />

        </div>
    );
}