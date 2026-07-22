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
        <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 text-2xl font-semibold">
                Customer Information
            </h2>

            <div className="space-y-5">
                <div>
                    <p className="text-sm text-gray-500">
                        Full Name
                    </p>

                    <p className="font-semibold">
                        {customer.fullName}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Phone Number
                    </p>

                    <p className="font-semibold">
                        {customer.phone}
                    </p>
                </div>

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
                        Address
                    </p>

                    <p className="font-semibold">
                        {customer.address}
                    </p>
                </div>

                {customer.landmark && (
                    <div>
                        <p className="text-sm text-gray-500">
                            Landmark
                        </p>

                        <p className="font-semibold">
                            {customer.landmark}
                        </p>
                    </div>
                )}
            </div>

        </div>
    );
}