"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CreditCard from "@/components/cards/Credit-card";
import { Button } from "@/components/ui/button";
import { Container } from "./utils";

export default function CardShowcase() {
  return (
    <div className="bg-secondary h-[500px]">
      <Container>
        <section className="w-full py-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 rounded-3xl">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-primary tracking-wider">
                  HARBORFRONT REWARDS+® CARD
                </h2>
                <h1 className="text-4xl font-bold text-gray-900">
                  Take advantage of a Low Intro APR for 18 Months
                </h1>
                <p className="text-lg text-gray-600 mt-4">
                  on purchases and balance transfers. Plus, No Annual Fee*
                </p>
              </div>

              <div className="space-y-4 py-6">
                {[
                  { title: "2X Points", desc: "on dining and entertainment" },
                  { title: "1X Points", desc: "on all other purchases" },
                  { title: "$200 Cash Back", desc: "after spending $1,500 in first 3 months" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="border-2 bg-transparent border-white rounded-3xl p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative">
                  <CreditCard
                    cardholderName="LINDA WALKER"
                    expiryDate="12/28"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
