import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
  { name: 'All Subscriptions', href: '/product', current: false },
  { name: 'Coupons', href: '/coupons', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function StickyNavbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo and Company Name */}
              <div className="flex items-center">
                <div className="w-12 h-12 mr-3 rounded-full overflow-hidden shadow-lg"> {/* Increased size */}
                   <Link to='/'>
                   <img
                    className="w-full h-full object-cover"
                    src="/images/favicon.ico"
                    alt="Your Company Logo"
                  /></Link>
                </div>
                <span className="text-2xl font-semibold text-gray-800">OttMartIndia</span>
              </div>

              {/* Mobile Menu Button, Visible Only on Mobile */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <span className="block h-6 w-6" aria-hidden="true">X</span>
                  ) : (
                    <span className="block h-6 w-6" aria-hidden="true">☰</span>
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-600 hover:bg-orange-100 hover:text-orange-500',
                      'rounded-md px-3 py-2 text-sm font-medium transition duration-200 ease-in-out'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:bg-orange-100 hover:text-orange-500',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
