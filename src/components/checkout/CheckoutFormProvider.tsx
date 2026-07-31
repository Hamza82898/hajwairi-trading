"use client"

import { Session } from "next-auth";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, CheckoutFormData } from "@/lib/validations/checkout";
import { useCheckoutStore } from "@/store/checkoutStore";



interface Props {
    children: ReactNode;
    session: Session;
}

export default function CheckoutFormProvider({
    children,
    session,
}: Props) {
    const { data } = useCheckoutStore();
    

    const methods = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            ...data,

            fullName:
                data.fullName ||
                session.user.name ||
                "",

            email:
                data.email ||
                session.user.email ||
                "",
        },
        mode: "onChange"
    });

    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    );
}