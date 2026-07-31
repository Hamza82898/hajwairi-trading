import { Prisma } from "@prisma/client";

type CustomerType = Prisma.CustomerGetPayload<{
    include: {
        user: true;
        orders: true;
    };
}>;

interface Props {
    customer: CustomerType;
}

export default function CustomerInfo({
    customer,
}: Props) {
    return (
        <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-6 text-2xl font-bold">
                Customer Information
            </h2>

            <div className="space-y-5">
                <div>
                    <p className="text-sm text-gray-500">
                        Full Name
                    </p>

                    <p className="font-medium"> 
                        {customer.fullName}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Phone
                    </p>

                    <p className="font-semibold">
                        {customer.phone}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Email
                    </p>

                    <p className="font-semibold">
                        {customer.email ?? "-"}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Customer Type
                    </p>

                    {customer.user ? (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                            Registered Customer
                        </span>
                        
                    ) : (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
                            Guest Customer
                        </span>
                    )}
                </div>
            </div>

            <hr className="my-6" />

            <h3 className="mb-4 text-lg font-semibold">
                Delivery Address
            </h3>

            <div className="space-y-4">
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

                        <p className="font-semibold">
                            {customer.landmark}
                        </p>
                    </div>
                )}

                {customer.notes && (
                    <div>
                        <p className="text-sm text-gray-500">
                            Delivery Notes
                        </p>
                        <p className="font-semibold">
                            {customer.notes}
                        </p>
                    </div>
                )}

            </div>

        </div>
    );
}