"use client"
import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

import { Button } from "@/components/ui/button";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "@/app/authentication/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { client } from "@/sanity/lib/client";
import { SanityProduct } from "@/config/inventory";
import { groq } from "next-sanity";

let uid: string | null;

onAuthStateChanged(auth, (user) => {
    if (user) {
        uid = user.uid;
    } else {
        uid = null;
    }
});

async function fetchPurchase(id: string, productName: string, price: number) {
    try {
        const currentDate = new Date();
        const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

        await addDoc(collection(db, 'checkout'), {
            userid: uid,
            id: id,
            productName: productName,
            price: price,
            timestamp: formattedDate
        });
        console.log(`Purchase for product ID ${id} successful.`);
    } catch (error) {
        console.error(`Error adding purchase for product ID ${id}:`, error);
    }
}

export function CartSummary() {
    const { totalPrice, cartDetails, cartCount, redirectToCheckout } = useShoppingCart();
    const [isLoading, setLoading] = useState(false);
    const isDisabled = isLoading || cartCount! === 0;
    const shippingAmount = cartCount! > 300 ? 0 : 50;
    const totalAmount = totalPrice! + shippingAmount;

    async function onCheckout() {
        setLoading(true);
        const modifiedCartDetails = { ...cartDetails };
        Object.keys(modifiedCartDetails).forEach((key) => {
            const product = modifiedCartDetails[key];
            if (product && typeof product.formattedValue === 'string') {
                const formattedValue = product.formattedValue;
                const value = (Number(formattedValue.replace(/[^\d.]/g, '')) * 100).toFixed(0);
                const formattedPrice = `₹${value}`;
                const modifiedProduct = {
                    ...product,
                    formattedValue: value,
                    formattedPrice: formattedPrice
                };
                modifiedCartDetails[key] = modifiedProduct;
            }
        });

        const response = await fetch('/api/checkout', {
            method: "POST",
            body: JSON.stringify(modifiedCartDetails)
        });
        const data = await response.json();
        const result = await redirectToCheckout(data.id);
        if (result?.error) {
            console.error(result);
        }

        if (cartDetails) {
            Object.keys(cartDetails).forEach((key) => {
                const product = cartDetails[key];
                const { id, name, price } = product;
                fetchPurchase(id, name, price);
            });
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            if (!cartDetails) return;
    
            try {
                const productIds = Object.keys(cartDetails).map(key => cartDetails[key].id);
                const products = await client.fetch<SanityProduct[]>(
                    groq`*[_type == "product" && _id in $productIds]`,
                    { productIds }
                );
    
                console.log('Fetched products:', products);
    
                // Extract product IDs and pass them to fetchPurchase
                products.forEach((product) => {
                    if (uid) {
                        fetchPurchase(product._id, product.name, product.price);
                    }
                });
    
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
    
        if (cartDetails && Object.keys(cartDetails).length > 0) {
            fetchProducts();
        }
    }, [cartDetails]);

    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <h2 id="summary-heading" className="text-lg font-medium">
                Order summary
            </h2>

            <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium">₹{totalPrice}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
                    <dt className="flex items-center text-sm">
                        <span>Shipping estimate</span>
                    </dt>
                    <dd className="text-sm font-medium">₹{shippingAmount}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
                    <dt className="text-base font-medium">Order total</dt>
                    <dd className="text-base font-medium">₹{totalAmount}</dd>
                </div>
            </dl>

            <div className="mt-6">
                <Button onClick={onCheckout} className="w-full" disabled={isDisabled}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isLoading ? "Loading..." : "Checkout"}
                </Button>
            </div>
        </section>
    );
}
