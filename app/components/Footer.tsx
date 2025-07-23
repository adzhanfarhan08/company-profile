export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Company Name</h3>
          <p className="text-gray-300">Developing Business to Future.</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Web - Build Your Company Profile
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                System - Improving Your Business Operational
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Digital Marketing - Grow Fast Your Business
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <address className="text-gray-300 not-italic">
            <p>Sleman</p>
            <p>Yogyakarta, Indonesia</p>
          </address>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <p>Privacy</p>
            <p>|</p>
            <p>Terms and Conditions</p>
          </div>
          <p>©{new Date().getFullYear()} | All Rights Reserved | DUMMY, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
