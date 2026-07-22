import Image from "next/image";
import { Prisma } from "@prisma/client";
import { it } from "node:test";

type OrderWithRelations = Prisma.OrderGetPayload<{
    include: {
        customer: true;
        items: {
            include: {
                product: {
                    include:{
                        images: true;
                    };
                };
            };
        };
    };
}>;

interface Props {
    order: OrderWithRelations;
}

export default function OrderItems({
    order,
}: Props) {
    return (
        <div className="rounded-xl bg-white shadow">
            <div className="border-b p-6">
                <h2 className="text-2xl font-semibold">
                    Ordered Items
                </h2>
            </div>

            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-5 py-4 text-left">
                            Image
                        </th>

                        <th className="px-5 py-4 text-left">
                            Product
                        </th>

                        <th className="px-5 py-4 text-center">
                            Qty
                        </th>

                        <th className="px-5 py-4 text-right">
                            Price
                        </th>

                        <th className="px-5 py-4 text-right">
                            Total
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {order.items.map((item) => {
                        const image = 
                            item.product.images.find(
                                (img) => img.isPrimary
                            )?.url ??
                            item.product.images[0]?.url ??
                            "/placeholder.png";
                        
                        return (
                            <tr
                                key={item.id}
                                className="border-t"
                            >
                                <td className="px-5 py-4">
                                    <Image 
                                        src={image}
                                        alt={item.product.name}
                                        width={70}
                                        height={70}
                                        className="rounded-lg object-cover"
                                    />
                                </td>

                                <td className="px-5 py-4">
                                    <div>
                                        <p className="font-semibold">
                                            {item.product.name}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {item.product.unit}
                                        </p>
                                    </div>
                                </td>

                                <td className="px-5 py-4 text-center">
                                    {item.quantity}
                                </td>

                                <td className="px-5 py-4 text-right">
                                    BD {item.price.toFixed(2)}
                                </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}