import Link from 'next/link';

export default function HeroSection() {
  return (
    <div>
      <section className="bg-blue-500 text-white flex justify-center items-center h-screen">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">Powerfull Innovation</h1>
          <p className="py-3 text-2xl">Helping Your Business To Growing Fastest Without Problem</p>
          <div className="space-x-4 my-5">
            <Link href="/" className="bg-black hover:text px-6 py-3 rounded-lg font-medium inline-block">
              Who Am I ?
            </Link>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-lg font-semibold text-blue-600 mb-3">WHAT WE DO</h2>
            <h3 className="text-4xl font-bold text-gray-800">What We Are Offering</h3>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-10 h-10 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">IT Services</h4>
                <p className="text-gray-600 mb-6">Comprehensive IT solutions tailored to your business needs.</p>
                {/* <button className="text-blue-500 font-medium hover:text-blue-700 transition-colors">Learn more →</button> */}
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-10 h-10 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Web Development</h4>
                <p className="text-gray-600 mb-6">Modern, responsive websites that drive results.</p>
                {/* <button className="text-blue-500 font-medium hover:text-blue-700 transition-colors">Learn more →</button> */}
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-10 h-10 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Structure Operational</h4>
                <p className="text-gray-600 mb-6">Our proprietary solutions for business transformation.</p>
                {/* <button className="text-blue-500 font-medium hover:text-blue-700 transition-colors">Learn more →</button> */}
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-10 h-10 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Digital Agency</h4>
                <p className="text-gray-600 mb-6">Full-service digital marketing and strategy.</p>
                {/* <button className="text-blue-500 font-medium hover:text-blue-700 transition-colors">Learn more →</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
