export interface PlaceOrderItem {
    productId: number;
    quantity: number;
    price: number;
}

export interface PlaceOrderCustomer {
    fullName: string;
    phone: string;
    area: string;
    address: string;
    landmark?: string;
    paymentMethod: "cash" | "benefitpay";
}

export interface PlaceOrderInput {
    customer: PlaceOrderCustomer;
    cart: PlaceOrderItem[];
}