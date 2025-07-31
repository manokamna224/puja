import { PlayfairDisplay } from '@/app/layout';
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#ed1010] text-gray-400 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Logo Section */}
        <div className="col-span-1">
          <h2 className={`text-white text-2xl font-bold mb-1 ${PlayfairDisplay.className}`}>
            PUJA NIVARAN
          </h2>
          <p className="text-xs font-mono text-white">
            Spiritual World & Temple Web-App
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-md font-semibold text-white mb-2">Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/puja" className="hover:text-white transition">Puja</a></li>
            <li><a href="/chadhava" className="hover:text-white transition">Chadhava</a></li>
            <li><a href="/prasad" className="hover:text-white transition">Prasad</a></li>
            <li><a href="/temple" className="hover:text-white transition">Temples</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-md font-semibold text-white mb-2">Help</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Get Spiritual Help</a></li>
          </ul>
        </div>

        {/* Documents */}
        <div>
          <h4 className="text-md font-semibold text-white mb-2">Documents</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white transition">Disclaimers</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-md font-semibold text-white mb-2">Get in touch</h4>
          <p className="text-sm text-white mb-4">
            Follow us on social media for the latest updates.
          </p>
          <div className="flex gap-4">
            <FaFacebookF size={18} className="hover:text-white cursor-pointer transition" />
            <FaYoutube size={18} className="hover:text-white cursor-pointer transition" />
            <FaInstagram size={18} className="hover:text-white cursor-pointer transition" />
            <FaTwitter size={18} className="hover:text-white cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-white mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Puja Nivaran. All rights reserved.
      </div>
    </footer>
  );
}
