import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PiggyBank, Wallet, CreditCard, Calculator } from "lucide-react";
import HarboLogo from "./logo/HarboLogo";
import { Container } from "./utils";

export default function BankingMatch() {
  return (
    <Container>
      <section className="py-10 bg-white flex items-center justify-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Meet your banking match
          </h1>

          <div className="flex lg:flex-row flex-col items-center ">
            {/* Image Column */}
            <div className="">
              <div className="relative w-[500px] h-[300px]">
                <Image
                  src="/family.png"
                  alt="Mother and child reading together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Phone Mockup Column */}
            <div className="flex items-center justify-center">
              <div className="relative w-[200px]">
                <div className="rounded-[3rem] border-8 border-gray-900 overflow-hidden bg-white shadow-xl">
                  <div className="aspect-[9/19.5] relative">
                    <div className="absolute inset-0 p-4">
                      <div className="space-y-4">
                        <div className="flex mt-3 items-center justify-between font-bold">
                          <HarboLogo size="sm" />
                        </div>

                        <p className="text-sm text-gray-600">
                          Hi Michelle, How can we help you today?
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                          {[
                            {
                              icon: <PiggyBank className="h-5 w-5" />,
                              text: "Saving up for something",
                            },
                            {
                              icon: <Wallet className="h-5 w-5" />,
                              text: "Managing everyday finances",
                            },
                            {
                              icon: <CreditCard className="h-5 w-5" />,
                              text: "Exploring credit cards",
                            },
                            {
                              icon: <Calculator className="h-5 w-5" />,
                              text: "Borrowing money",
                            },
                          ].map((item, index) => (
                            <Card
                              key={index}
                              className={`p-3 flex flex-col items-center text-center gap-2 cursor-pointer transition-colors hover:bg-primary/5 ${
                                index === 1 ? "border-primary bg-primary/5" : ""
                              }`}
                            >
                              <div
                                className={`${
                                  index === 1 ? "text-primary" : "text-gray-600"
                                }`}
                              >
                                {item.icon}
                              </div>
                              <span className="text-xs font-medium">
                                {item.text}
                              </span>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="bg-gray-50">
              <div className="p-8 space-y-6">
                <h2 className="text-3xl font-bold">Our new tool can help</h2>
                <p className="text-lg text-gray-600">
                  Need help selecting a Harborfront product? We've made it easy
                  for you. Our interactive product selector tool can guide you
                  to the products that best meet your needs.
                </p>
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white"
                >
                  Help me choose
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
