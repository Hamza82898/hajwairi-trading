import { getReviews } from "@/lib/review/queries";
import Link from "next/link";



export default async function ReviewsPage() {
    const reviews = await getReviews();

    return (
        <div className="space-y-8">

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Reviews
                    </h1>

                    <p className="text-gray-500">
                        Manage customer testimonials.
                    </p>
                </div>
                <Link
                    href="/admin/reviews/new"
                    className="rounded-xl bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
                >
                    + Add Review
                </Link>
            </div>
            
            <div className="overflow-hidden rounded-2xl bg-white shadow">

                <table className="w-full">

                    <thead className="bg-gray-50">

                        <tr className="text-left">

                            <th className="p-4">
                                Customer
                            </th>

                            <th className="p-4">
                                Rating
                            </th>

                            <th className="p-4">
                                Product
                            </th>

                            <th className="p-4">
                                Featured
                            </th>

                            <th className="p-4">
                                Approved
                            </th>

                            <th className="p-4">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {reviews.map((review) => (

                            <tr
                                key={review.id}
                                className="border-t"
                            >

                                <td className="p-4">
                                    {review.customerName}
                                </td>

                                <td className="p-4">
                                    ⭐ {review.rating}
                                </td>

                                <td className="p-4">
                                    {review.product?.name ?? "-"}
                                </td>

                                <td className="p-4">
                                    {review.featured ? "✅" : "❌"}
                                </td>

                                <td className="p-4">
                                    {review.approved ? "✅" : "❌"}
                                </td>

                                <td className="p-4">

                                    Edit

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}