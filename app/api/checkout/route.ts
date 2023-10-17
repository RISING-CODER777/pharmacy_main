import { NextResponse } from "next/server"
// @ts-ignore
import { validateCartItems } from "use-shopping-cart/utilities"

import { inventory } from "@/config/inventory"
import { stripe } from "@/lib/stripe"

export async function POST(request: Request) {
    const cartDetails = await request.json()
    const modifiedCartDetails = { ...cartDetails };

Object.keys(modifiedCartDetails).forEach(key => {
    const product = modifiedCartDetails[key];
    if (product && typeof product.formattedValue === 'string') {
        const formattedValue = product.formattedValue;
        const modifiedProduct = {
            ...product,
            formattedValue: formattedValue // Keep it as a string
        };
        modifiedCartDetails[key] = modifiedProduct;
    }
});

    
    const lineItems = validateCartItems(inventory, modifiedCartDetails)
   console.log(lineItems);

    const origin = request.headers.get('origin')
    const session = await stripe.checkout.sessions.create({
        submit_type:"pay",
        mode:"payment",
        payment_method_types:['card'],
        line_items:lineItems,
        shipping_address_collection:{
            allowed_countries:['IN']
        },
        shipping_options:[
            {
                shipping_rate:"shr_1O0r14SDh9UrfAfBQUWT5AsU"
            }
        ],
        billing_address_collection:"auto",
        success_url:`${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:`${origin}/cart`

    })
    return NextResponse.json(session)
}
