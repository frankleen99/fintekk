export default function Footer() {
  return (
    <div className="bg-[#FBFBFB] flex flex-col justify-end">
      <footer className="bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
            {/* Brand Section */}
            <div className="lg:max-w-sm">
              <h2 className="text-3xl font-medium text-[#172E80] mb-3">
                Fintekk
              </h2>
              <p className="text-[#777777] font-extralight text-sm leading-relaxed">
                Fintekk is the bank that does it all. Manage everything directly
                and easy with fintekk.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
              {/* Company */}
              <div>
                <h3 className="font-semibold text-[#172E80] mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-semibold text-[#172E80] mb-4">Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      Payments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      Investments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      Savings Plans
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold text-[#172E80] mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      Help Centre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="font-semibold text-[#172E80] mb-4">
                  Contact Us
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[#172E80] font-extralight hover:text-gray-900 text-sm transition-colors"
                    >
                      www.fintekk.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-1 lg:pt-8 xl:pt-8 2xl:pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-[#172E80] text-sm">
              Copyright 2022 fintekk. All rights reserved
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <a
                href="#"
                className="text-[#172E80] hidden lg:block hover:text-gray-900 transition-colors"
              >
                Terms and Conditions
              </a>
              <a
                href="#"
                className="text-[#172E80] hidden lg:block hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
