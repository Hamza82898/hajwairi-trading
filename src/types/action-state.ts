export type ActionState = {
    success: boolean;
    message: string;

    orderId?: number;
    orderNumber?: string;
    errors?: Record<string, string[]>;
};