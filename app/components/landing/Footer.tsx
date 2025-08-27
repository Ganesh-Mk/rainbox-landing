import Image from "next/image";
import {
  FaXTwitter,
  FaLinkedin,
  FaRegEnvelope,
  FaLinkedinIn,
} from "react-icons/fa6";

<div className="mt-4 flex items-center gap-4 sm:mt-0">
  <a href="#" className="text-muted-foreground">
    <FaXTwitter size={20} />
  </a>
  <a href="#" className="text-muted-foreground">
    <FaLinkedin size={20} />
  </a>
  <a href="#" className="text-muted-foreground">
    <FaRegEnvelope size={20} />
  </a>
</div>;

const Footer = () => {
  return (
    <footer className="border-brand-gray-200 bg-brand-gray-100/50 border-t">
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <Image
              src="/landing/logo-lg.png"
              alt="Rainbox Logo"
              width={110}
              height={32}
              className="w-36 "
            />
            <p className="text-brand-gray-500 ml-4 mt-4">
              Newsletter inbox for pro readers
            </p>
            <p className="text-brand-gray-500 ml-4">
              Save and Organize Your Web Finds Seamlessly
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h4 className="text-brand-gray-800 font-semibold">Product</h4>
              <ul className="text-brand-gray-500 mt-4 space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground">
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-gray-800 font-semibold">Company</h4>
              <ul className="text-brand-gray-500 mt-4 space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground">
                    Newsletter Directory
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-gray-800 font-semibold">Community</h4>
              <ul className="text-brand-gray-500 mt-4 space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground">
                    Affiliate program
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground">
                    Partner with us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-brand-gray-200 border-t px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-brand-gray-500 flex flex-col items-center justify-between text-sm sm:flex-row">
          <div className="flex flex-col items-center gap-x-4 gap-y-2 sm:flex-row">
            <span className="text-muted-foreground">
              © 2025 Rainbox. All rights reserved
            </span>
            <a
              href="/privacy"
              target="_blank"
              className="text-muted-foreground hover:text-gray-900 hover:underline"
            >
              Privacy policy
            </a>
            <a
              href="/terms-of-use"
              target="_blank"
              className="text-muted-foreground hover:text-gray-900 hover:underline"
            >
              Terms of service
            </a>
          </div>
          <div className="mt-4 flex items-center gap-4 sm:mt-0">
            <a href="#" className="text-muted-foreground">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-muted-foreground">
              <FaRegEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
