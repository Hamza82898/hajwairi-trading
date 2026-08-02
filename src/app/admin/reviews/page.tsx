import { getReviews } from "@/lib/review/queries";
import Link from "next/link";



export default async function ReviewsPage() {
    const reviews = await getReviews();

    return (
        <div className="space-y-8">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold sm:text-4xl">
                        Reviews
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        Manage customer testimonials.
                    </p>
                </div>
                <Link
                    href="/admin/reviews/new"
                    className="w-full rounded-xl bg-green-700 px-5 py-3 text-center font-semibold text-white hover:bg-green-800 sm:w-auto"
                >
                    + Add Review
                </Link>
            </div>
            
            <div className="overflow-x-auto rounded-2xl bg-white shadow">

                <table className="min-w-[850px] w-full">

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

                                    <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">
                                        Edit
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}