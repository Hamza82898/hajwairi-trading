import { Prisma } from "@prisma/client";

type CustomerType = Prisma.CustomerGetPayload<{
    include: {
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
        <div className="rounded-xl bg-white p-6 shadow">

            <h2 className="mb-6 text-2xl font-semibold">
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

                    <p className="font-medium">
                        {customer.phone}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Area
                    </p>

                    <p className="font-medium">
                        {customer.area}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Address
                    </p>

                    <p className="font-medium">
                        {customer.address}
                    </p>
                </div>

                {customer.landmark && (
                    <div>
                        <p className="text-sm text-gray-500">
                            Landmark
                        </p>

                        <p className="font-medium">
                            {customer.landmark}
                        </p>
                    </div>
                )}
            </div>

        </div>
    );
}