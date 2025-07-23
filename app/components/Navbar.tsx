import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <div className="">
            <Link href={'/'} className="text-white hover:text-gray-300">
              Data Migrasi Sempurna
            </Link>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <Link href={'/business-support'} className="text-white hover:text-gray-300">
              Business Support
            </Link>
            <Link href={'/product'} className="text-white hover:text-gray-300">
              Product
            </Link>
            <Link href={'/pricing'} className="text-white hover:text-gray-300">
              Pricing
            </Link>
            <Link href={'/whats-new'} className="text-white hover:text-gray-300">
              What New
            </Link>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white text-sm py-2 px-3 rounded-full transition-colors">
              <Link href={'/contact-us'}>Contact Us</Link>
            </button>
            <button className="bg-white text-black hover:bg-gray-200 text-sm py-2 px-3 rounded-full transition-colors">
              <Link href={'/get-started'}>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
