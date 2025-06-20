import Link from "next/link";

const navigation = {
  mainCol1: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
  ],
  mainCol2: [
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
    { name: "Booking", href: "https://app.squareup.com/appointments/buyer/widget/hs7hvrxqk38fag/L51SWV5N7VVBD" },
    { name: "Accessibility", href: "/accessibility" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/lukemobiledetailing/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/lukesmobiledetailingllc/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@lukesmobiledetailing",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
          />
        </svg>
      ),
    },
  ],
  resources: [
    { name: "Car Cleaning Tips", href: "https://www.houseford.com/blogs/7256/car-cleaning-tips-and-tricks" },
    { name: "Auto Detailing Guide", href: "https://guidetodetailing.com/" },
    { name: "Vehicle Detailing Maintenance", href: "https://www.detailedimage.com/Ask-a-Pro/auto-detailing-maintenance-schedules/" },
    { name: "Detailing Wiki", href: "https://www.detailingwiki.org/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Luke's Mobile Detailing</h3>
            <p className="mb-4">Professional car detailing services that come to you.</p>
            <address className="not-italic mb-4">
              <p>Service Area: Yuba City, Marysville, Meridian, Live Oak, Olivehurst, Linda, Gridley, Sutter, Plumas Lake, and surrounding areas in California.</p>
              <br></br>
              <p>Phone: <a href="tel:+15306503631" className="hover:text-primary">(530) 650-3631</a></p>
              <p>Email: <a href="mailto:luke8888z@gmail.com" className="hover:text-primary">luke8888z@gmail.com</a></p>
            </address>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-primary" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links and Business Hours */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.mainCol1.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <br></br><br></br>
              <ul className="space-y-2">
                {navigation.mainCol2.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources and Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Helpful Resources</h3>
            <ul className="space-y-2 mb-6">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
          <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Luke's Mobile Detailing. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <Link href="/sitemap" className="text-sm text-gray-400 hover:text-primary">
              Sitemap
            </Link>
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 