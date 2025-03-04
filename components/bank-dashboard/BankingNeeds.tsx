import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BankingWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="space-y-4 md:space-y-6 max-w-2xl">
              <div className="flex items-center gap-2">
                <div className="h-1 w-6 bg-third"></div>
                <p className="text-sm font-medium uppercase tracking-wider text-orange">
                  Custom Banking
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Banking For Your Needs
              </h1>
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar navigation */}
          <div className="lg:w-1/4">
            <div className="border rounded-md overflow-hidden">
              <div className="flex">
                <div className="bg-primary text-white py-4 px-2 writing-mode-vertical flex items-center justify-center">
                  <span
                    className="transform rotate-180 text-xs tracking-widest"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    BUSINESS
                  </span>
                </div>
                <div className="flex-1">
                  <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">Savings Accounts</h3>
                    <p className="text-sm text-gray-600">High interest...</p>
                  </div>
                  <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">Consumer Loans</h3>
                    <p className="text-sm text-gray-600">Low collateral...</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="bg-secondary text-gray-700 py-4 px-2 writing-mode-vertical flex items-center justify-center">
                  <span
                    className="transform rotate-180 text-xs tracking-widest"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    INDIVIDUAL
                  </span>
                </div>
                <div className="flex-1">
                  <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">Credit Cards</h3>
                    <p className="text-sm text-gray-600">No fees...</p>
                  </div>
                  <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">Advisory Services</h3>
                    <p className="text-sm text-gray-600">Financial advice...</p>
                  </div>
                  <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">Insurance Products</h3>
                    <p className="text-sm text-gray-600">Fits your needs...</p>
                  </div>
                  <div className="p-4 hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">Savings Account</h3>
                    <p className="text-sm text-gray-600">Banking Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="lg:w-2/4 bg-gray-50 rounded-md p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange/20 p-3 rounded-md">
                <div className="w-6 h-6 rounded-full bg-primary/50 flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6V18M18 12H6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Savings Accounts</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Invest in Your Future, <br />
              Start Saving.
            </h2>

            <p className="text-gray-600 mb-8">
              Secure your financial future with our high-yield savings solutions
              designed to help you reach your goals. Whether you're saving for a
              home, education, or retirement, our personalized approach ensures
              your money works harder for you. With competitive rates and
              flexible options, building wealth has never been more accessible.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-md">
                <h3 className="text-3xl font-bold text-gray-800">3.2k</h3>
                <p className="text-sm text-gray-600">Live Savings Accounts</p>
                <div className="flex items-center gap-2 mt-2">
                  <svg
                    className="text-green-500"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">2.6% IN LFY</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md">
                <h3 className="text-3xl font-bold text-gray-800">$2b</h3>
                <p className="text-sm text-gray-600">In Customer Savings</p>
                <div className="flex items-center gap-2 mt-2">
                  <svg
                    className="text-green-500"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">4.5% IN LFY</span>
                </div>
              </div>
            </div>

            {/* <Button className="bg-red-900 hover:bg-red-800">
              <span>Explore Options</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
          </div>

          {/* Digital opening form */}
          <div className="lg:w-1/4 bg-gray-50 rounded-md p-6">
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Banking Benefits
            </h3>

            <div className="space-y-5">
              <div className="bg-primary text-white p-4 rounded-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L19 9M19 9H5M19 9V15M5 9L12 2M5 9V15M12 22L5 15M12 22L19 15"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium">Security First</h4>
                </div>
                <p className="text-sm text-red-100">
                  Advanced encryption and fraud protection for all your
                  transactions.
                </p>
              </div>

              <div className="bg-amber-600 text-white p-4 rounded-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-amber-500 p-2 rounded-full">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium">24/7 Access</h4>
                </div>
                <p className="text-sm text-amber-100">
                  Manage your accounts anytime, anywhere with our mobile banking
                  app.
                </p>
              </div>

              <div className="bg-teal-600 text-white p-4 rounded-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-teal-500 p-2 rounded-full">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium">Zero Fees</h4>
                </div>
                <p className="text-sm text-teal-100">
                  No hidden charges or maintenance fees on our premium accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
