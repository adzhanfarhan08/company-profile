export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Company Name</h3>
          <p className="text-gray-300">Membangun solusi digital untuk bisnis Anda sejak 2010.</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-300 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="text-gray-300 hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Mobile Apps
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <address className="text-gray-300 not-italic">
            <p>123 Business Ave</p>
            <p>Jakarta, Indonesia</p>
            <p>Email: info@company.com</p>
            <p>Phone: +62 123 4567 890</p>
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
