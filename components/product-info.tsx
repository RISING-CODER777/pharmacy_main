"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { SanityProduct } from "@/config/inventory";
import { getSizeName } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/star-rating";
import { useToast } from "./ui/use-toast";

interface Props {
  product: SanityProduct;
}

export function ProductInfo({ product }: Props) {
  const { addItem, incrementItem, cartDetails } = useShoppingCart();
  const { toast } = useToast(); // Use your toast component here
  const isInCart = !!cartDetails?.[product._id];
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  useEffect(() => {
    const hasUploadedPrescription = localStorage.getItem('hasUploadedPrescription');
    if (!hasUploadedPrescription) {
      toast({
        title: "Upload Prescription",
        description: "Please upload a prescription before adding to cart.",
      });
    }
  }, [toast]);

  function openUploadModal() {
    const hasUploadedPrescription = localStorage.getItem('hasUploadedPrescription');
    if (!hasUploadedPrescription && !uploadModalOpen) {
      setUploadModalOpen(true);
      localStorage.setItem('hasUploadedPrescription', 'true');
    }
  }

  function closeUploadModal() {
    setUploadModalOpen(false);
  }

  function addToCart() {
    const item = {
      ...product,
      product_data: {},
    };
    isInCart ? incrementItem(item._id) : addItem(item);
    toast({
      title: `${item.name}`,
      description: "Product added to cart",
      action: (
        <Link href="/cart">
          <Button variant="link" className="gap-x-2 whitespace-nowrap">
            <span>Open Cart</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      ),
    });
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <StarRating productId={product._id} /> 

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">
          {product.currency === "INR" && "₹"}{product.price}
          <span className="ml-4">
            <Button
              type="button"
              onClick={openUploadModal}
              className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-700"
              disabled={uploadModalOpen}
            >
              Upload Prescription
            </Button>
          </span>
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            type="button"
            onClick={addToCart}
            className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Add to cart
          </Button>
        </div>
      </form>

      {uploadModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-4xl w-full mt-16">
            <div className="flex justify-end mb-4">
              <button className="text-gray-700 hover:text-gray-900" onClick={closeUploadModal}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <iframe
              src="https://prescription-upload-nlbz.vercel.app/"
              title="Prescription Upload"
              width="100%"
              height="400px"
              frameBorder="0"
              style={{ minWidth: "800px" }}
            />
          </div>
        </div>
      )}

      <div className="mt- flex flex-col items-center">
        <iframe
          src="https://reviews-ebon.vercel.app/"
          title="Product Reviews"
          width="100%"
          height="400px"
          frameBorder="0"
          style={{ minWidth: "800px" }}
        />
      </div>
    </div>
  );
}
