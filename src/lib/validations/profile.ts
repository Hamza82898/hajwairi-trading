import { checkoutSchema } from "./checkout";

export const profileSchema = checkoutSchema.omit({
    paymentMethod: true,
});

export type ProfileInput = import("zod").infer<typeof profileSchema>;