"use client"

import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, CheckoutFormData } from "@/lib/validations/checkout";
import { useCheckoutStore } from "@/store/checkoutStore";



interface Props {
    children: ReactNode;
}

export default function CheckoutFormProvider({
    children,
}: Props) {
    const { data } = useCheckoutStore();

    const methods = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: data,
        mode: "onChange"
    });

    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    );
}