"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Edit, ShoppingBag, History, BarChart2 } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MainNav } from '@/components/main-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { Toast } from '@/components/ui/toast';
import { toast } from './ui/use-toast';

export function SiteHeader() {
  const [showDeliveryMessage, setShowDeliveryMessage] = useState(true);
  const [showAdminPopup, setShowAdminPopup] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [clickedButton, setClickedButton] = useState<string | null>(null); // Adjusted the type here
  const { cartCount } = useShoppingCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearchQuery = searchParams?.get('search') ?? '';

  async function hideDeliveryMessage() {
    setShowDeliveryMessage(false);
  }

  async function onSubmit(event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get('search');
    await router.push(`/?search=${searchQuery}`);
  }

  async function handleOpenAdminPopup(button: string) {
    if(button === 'history') {
      await router.push('/previous-purchase');
    } else {
      setClickedButton(button);
      setShowAdminPopup(true);
    }
  }

  async function handleAuthenticate() {
    if (adminKey === 'crt') {
      setShowAdminPopup(false);
      toast({ title: 'Authentication successful!' });

      if (process.env.NODE_ENV === 'development') {
        if (clickedButton === 'studio') {
          await router.push('/studio');
        } else if (clickedButton === 'dashboard') {
          await router.push('/dashboard');
        }
      } else {
        await router.push('/dashboard');
      }
      setAdminKey('');
    } else {
      toast({ title: 'Access denied. This action is restricted to admins.' });
    }
  }

  function handleCloseAdminPopup() {
    setShowAdminPopup(false);
    setAdminKey('');
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      {showDeliveryMessage && (
        <div className="bg-blue-500 text-white py-2 px-6 flex justify-between items-center">
          <p className="text-sm font-bold">
            Get free delivery on orders above RS.300!
          </p>
          <button onClick={hideDeliveryMessage} className="text-xl">
            &#x2715;
          </button>
        </div>
      )}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        <form onSubmit={onSubmit} className="hidden items-center lg:inline-flex">
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 lg:w-[300px]"
            defaultValue={defaultSearchQuery}
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-blue-500 text-white rounded-md"
          >
            Search
          </button>
        </form>
        <div className="flex items-center space-x-1">
          <Link href="/cart">
            <Button size="sm" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ThemeToggle />
          {process.env.NODE_ENV == 'development' && (
            <>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleOpenAdminPopup('studio')}
              >
                <Edit className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleOpenAdminPopup('history')}
              >
                <History className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleOpenAdminPopup('dashboard')}
              >
                <BarChart2 className="h-5 w-5" />
              </Button>
              {showAdminPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-500">
                  <div className="bg-white p-8 rounded shadow-lg text-center">
                    <h2 className="text-xl font-bold mb-4">Admin Authentication</h2>
                    <input
                      type="password"
                      value={adminKey}
                      onChange={(e) => setAdminKey(e.target.value)}
                      placeholder="Enter admin key"
                      className="w-full h-10 px-3 mb-4 border border-gray-300 rounded focus:outline-none"
                    />
                    <button
                      onClick={handleAuthenticate}
                      className="bg-blue-500 text-white px-6 py-2 rounded font-semibold"
                    >
                      Authenticate
                    </button>
                    <button
                      onClick={handleCloseAdminPopup}
                      className="ml-4 text-sm text-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
