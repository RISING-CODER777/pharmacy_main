"use client"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"

import { seedSanityData } from "@/lib/seed"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "./authentication/firebase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

let uid: string | null
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid
  } else {
    uid = null
  }
})

interface Props {
  searchParams: {
    date?: string
    price?: string
    category?: string
    dosageform?: string
    medicationtype?: string
    search?: string
  }
}

export default async function Page({ searchParams }: Props) {
  const router = useRouter()
  if (!uid) {
    router.push('/authentication/signin')
  }

  const { date = "desc", price, category, dosageform, medicationtype, search } = searchParams

  const priceOrder = price ? `| order(price ${price})` : ""
  const dateOrder = date ? `| order(_createdAt${price})` : ""
  const order = `${priceOrder}${dateOrder}`

  const productFilter = `_type == "product"`
  const categoryFilter = category ? `&& "${category}" in categories` : ""
  const dosageFilter = dosageform ? `&& dosageform match"${dosageform}"` : ""
  const medicationFilter = medicationtype ? `&& medicationtype match "${medicationtype}"` : ""

  const searchFilter = search ? `&& name match "${search}"` : ""

  const filter = `*[${productFilter}${dosageFilter}${categoryFilter}${medicationFilter}${searchFilter}]`

  const products = await client.fetch<SanityProduct[]>(groq`${filter} ${order}{
    _id,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    description,
    "slug": slug.current
  }`)
  console.log(products)
  const handleSignOut = async () => {
    await signOut(auth)
    router.push('/authentication/signin')
  }

  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">{siteConfig.name}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">{siteConfig.description}</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} result{products.length == 1 ? "" : "s"}
            </h1>
            <div className="flex items-center">
              <ProductSort />
              {uid && (
                <button onClick={handleSignOut} className="ml-4 p-2 bg-red-500 text-white rounded">
                  Logout
                </button>
              )}
            </div>
          </div>
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10 ", products.length > 0 ? "lg:grid-cols-4" : "lg:grid-cols-[1fr_3fr]")}>
              <div className="hidden lg:block">
                <ProductFilters />
              </div>
              <ProductGrid products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
