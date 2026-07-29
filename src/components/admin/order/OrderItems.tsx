import Image from "next/image";
import { Prisma } from "@prisma/client";



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
    const productsTotal = order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="rounded-2xl bg-white shadow">
            
            <h2 className="text-2xl font-semibold">
                Ordered Products
            </h2>
            
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="border-b bg-gray-50">
                        <tr className="text-left">
                            <th className="px-4 py-3">
                                Product
                            </th>

                            <th className="px-4 py-3">
                                Unit Price
                            </th>

                            <th className="px-4 py-3">
                                Qty
                            </th>

                            <th className="px-4 py-3 text-right">
                                Total
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {order.items.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b transition hover:bg-gray-50"
                            >
                                {/*Product*/}

                                <td className="px-4 py-5">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-xl border">

                                            <Image 
                                                src={
                                                    item.product.images[0]
                                                        ?.url ??
                                                    "/placeholder.png"   
                                                }
                                                alt={item.product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold">
                                                {item.product.name}
                                            </h3>

                                            {/* <p className="text-sm text-gray-500">
                                                {item.product.category}
                                            </p> */}
                                        </div>
                                    </div>
                                </td>

                                {/*Price*/}

                                <td className="px-4 py-5 font-semibold">
                                    BD {item.price.toFixed(2)}
                                </td>

                                {/*Qty*/}
                                <td className="px-4 py-5">
                                    <span className="rounded-full bg-green-100 px-3 py-1 font-semibold text-green-700">
                                        {item.quantity}
                                    </span>
                                </td>

                                {/*Total*/}

                                <td className="px-4 py-5 text-right font-bold">
                                    BD {(item.price * item.quantity).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td
                                colSpan={3}
                                className="px-4 py-6 text-right text-lg font-bold"
                            >
                                Products Total
                            </td>

                            <td className="px-4 py-6 text-right text-2xl font-bold text-green-700">
                                BD {productsTotal.toFixed(2)}
                            </td>
                        </tr>
                    </tfoot>
                        
                </table>
            </div>
        </div>
    );
}