// app/components/landing/06-Footer.tsx
import Image from "next/image";
import { Linkedin, Mail } from 'lucide-react';

const TwitterIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

const Footer = () => {
  return (
    <footer className="border-t border-brand-gray-200 bg-brand-gray-100/50">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Image src="/logo-lg.png" alt="Rainbox Logo" width={110} height={32} />
            <p className="mt-4 text-brand-gray-500">Newsletter inbox for pro readers</p>
            <p className="text-brand-gray-500">Save and Organize Your Web Finds Seamlessly</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-brand-gray-800">Product</h4>
              <ul className="mt-4 space-y-2 text-brand-gray-500">
                <li><a href="#" className="hover:text-brand-gray-800">Features</a></li>
                <li><a href="#" className="hover:text-brand-gray-800">Pricing</a></li>
                <li><a href="#" className="hover:text-brand-gray-800">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-gray-800">Company</h4>
              <ul className="mt-4 space-y-2 text-brand-gray-500">
                <li><a href="#" className="hover:text-brand-gray-800">Newsletter Directory</a></li>
                <li><a href="#" className="hover:text-brand-gray-800">Blog</a></li>
                <li><a href="#" className="hover:text-brand-gray-800">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-gray-800">Community</h4>
              <ul className="mt-4 space-y-2 text-brand-gray-500">
                <li><a href="#" className="hover:text-brand-gray-800">Affiliate program</a></li>
                <li><a href="#" className="hover:text-brand-gray-800">Partner with us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto border-t border-brand-gray-200 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-brand-gray-500 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2">
            <span>© 2025 Rainbox. All rights reserved</span>
            <a href="#" className="hover:text-brand-gray-800">Privacy policy</a>
            <a href="#" className="hover:text-brand-gray-800">Terms of service</a>
            <a href="#" className="hover:text-brand-gray-800">Refund Policy</a>
          </div>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-brand-gray-500 hover:text-brand-gray-800"><TwitterIcon /></a>
            <a href="#" className="text-brand-gray-500 hover:text-brand-gray-800"><Linkedin size={20} /></a>
            <a href="#" className="text-brand-gray-500 hover:text-brand-gray-800"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;