export interface PlaceOrderItem {
    productId: number;
    quantity: number;
    price: number;
}

export interface PlaceOrderCustomer {
    fullName: string;
    phone: string;
    email: string;

    area: string;
    block: string;
    road: string;
    building: string;
    flat: string;

    landmark?: string;
    notes?: string;
    
    paymentMethod: "cash" | "benefitpay";
}

export interface PlaceOrderInput {
    customer: PlaceOrderCustomer;
    cart: PlaceOrderItem[];
}