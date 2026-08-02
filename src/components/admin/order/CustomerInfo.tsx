import { Prisma } from "@prisma/client";

type OrderWithRelations = Prisma.OrderGetPayload<{
    include: {
        customer: true;
        items: {
            include: {
                product: {
                    include: {
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

export default function CustomerInfo({
    order,
}: Props) {
    const customer = order.customer;

    return (
        <div className="rounded-2xl bg-white p-4 shadow sm:p-6">
            <h2 className="mb-6 text-xl font-bold sm:text-2xl">
                Customer Information
            </h2>

            <div className="space-y-5">
                <div>
                    <p className="text-sm text-gray-500">
                        Full Name
                    </p>

                    <p className="break-words font-semibold">
                        {customer.fullName}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Phone Number
                    </p>

                    <p className="break-all font-semibold">
                        {customer.phone}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Email
                    </p>

                    <p className="break-all font-semibold">
                        {customer.email || "-"}
                    </p>
                </div>
            </div>

            <hr className="my-6" />
            <h3 className="mb-5 text-lg font-semibold">
                Delivery Address
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">

                <div>
                    <p className="text-sm text-gray-500">
                        Area
                    </p>

                    <p className="font-semibold">
                        {customer.area}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Block
                    </p>

                    <p className="font-semibold">
                        {customer.block}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Road
                    </p>

                    <p className="font-semibold">
                        {customer.road}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Building
                    </p>

                    <p className="font-semibold">
                        {customer.building}
                    </p>
                </div>

                {customer.flat && (
                    <div>
                        <p className="text-sm text-gray-500">
                            Flat
                        </p>

                        <p className="font-semibold">
                            {customer.flat}
                        </p>
                    </div>
                )}
                
                

                {customer.landmark && (
                    <div>
                        <p className="text-sm text-gray-500">
                            Landmark
                        </p>

                        <p className="font-semibold break-words">
                            {customer.landmark}
                        </p>
                    </div>
                )}

                {customer.notes && (
                    <div className="sm:col-span-2">
                        <p className="text-sm text-gray-500">
                            Delivery Notes
                        </p>

                        <p className="break-words font-semibold">
                            {customer.notes}
                        </p>
                    </div>
                )}
            </div>

        </div>
    );
}