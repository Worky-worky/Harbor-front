import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Youtube } from "lucide-react";
import { Container } from "./utils";
import HarboLogo from "./logo/HarboLogo";

export default function Footer() {
  const footerLinks = {
    "Why Harborfront": [
      "Our Story",
      "Careers",
      "Benefits and Services",
      "Rewards",
      "Harborfront Entertainment®",
      "Special Offers",
    ],

    "Wealth Management": [
      "Harborfront® Private Client",
      "Harborfront Gold",
      "Harborfront Priority",
      "Harborfront Private Bank",
    ],

    "Business Banking": ["Small Business Accounts", "Commercial Accounts"],

    Rates: [
      "Personal Banking",
      "Credit Cards",
      "Mortgage",
      "Home Equity",
      "Personal Loans",
    ],

    "Help & Support": ["Contact Us", "Help & FAQs", "Security Center"],
  };

  const legalLinks = [
    "Terms & Conditions",
    "Privacy",
    "Notice at Collection",
    "Do Not Sell or Share My Personal Information",
    "Accessibility",
  ];

  return (
    <footer className="bg-[#2D2D2D] text-white">
      <Container>
        <div className="py-12">
          {/* Main Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 ml-10">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-bold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 items-center border-t border-gray-700 pt-5 mb-5 w-full">
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </Link>
          </div>

          {/* Legal Footer */}
          <div className="flex flex-col items-center justify-center border-t border-gray-700 pt-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              <span className="text-sm text-gray-300">
                © 2025 Harborfront Inc
              </span>
              {legalLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Disclosures section */}
        <div className="container pb-12">
          <div className="border-t border-gray-700 pt-8">
            <h2 className="text-xl font-bold mb-4">
              Important Legal Disclosures & Information
            </h2>

            <div className="space-y-6 text-gray-300 text-sm">
              <p>
                Harborfront.com provides information about and access to
                accounts and financial services provided by Harborfront, N.A.
                and its affiliates in the United States and its territories. It
                does not, and should not be construed as, an offer, invitation
                or solicitation of services to individuals outside of the United
                States.
              </p>

              <p>
                Terms, conditions and fees for accounts, products, programs and
                services are subject to change. Not all accounts, products, and
                services as well as pricing described here are available in all
                jurisdictions or to all customers. Your eligibility for a
                particular product and service is subject to a final
                determination by Harborfront. Your country of citizenship,
                domicile, or residence, if other than the United States, may
                have laws, rules, and regulations that govern or affect your
                application for and use of our accounts, products and services,
                including laws and regulations regarding taxes, exchange and/or
                capital controls that you are responsible for following.
              </p>

              <p>
                The products, account packages, promotional offers and services
                described in this website may not apply to customers of{" "}
                <Link href="#" className="underline hover:text-white">
                  International Personal Bank U.S.
                </Link>{" "}
                in the Harborfront® Private Client International, Harborfront®
                International, Harborfront International Personal, Harborfront
                Global Executive Preferred, and Harborfront Global Executive
                Account Packages.
              </p>

              <p>
                Deposit products and services are offered by Harborfront, N.A.,
                Member FDIC
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="w-10">
              {" "}
              {/* or w-24 for even smaller */}
              <HarboLogo />
            </div>
          </div>
        </div>

        {/* Feedback button */}
        {/* <div className="fixed bottom-4 right-4">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
            <svg
              className="w-4 h-4 rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            Feedback
          </button>
        </div> */}
      </Container>
    </footer>
  );
}
