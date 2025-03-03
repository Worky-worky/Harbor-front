"use client";
import Image from "next/image";
import { PinIcon as Chip } from "lucide-react";
import HarboLogo from "../logo/HarboLogo";

interface CreditCardProps {
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
}

export default function CreditCard({
  cardNumber = "1234 5678 1234 5678",
  cardholderName = "CARDHOLDER NAME",
  expiryDate = "00/00",
}: CreditCardProps) {
  return (
    <div className="relative w-[425px] h-[270px] rounded-[20px] p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden">
      {/* Background Lines */}
      <Image
        src="/icons/Lines.svg"
        alt="Background Pattern"
        fill
        className="opacity-30 object-cover"
      />

      <div className="h-full flex flex-col justify-between text-white relative">
        <div className="flex justify-between items-start px-5">
          <div className="w-3 h-3 opacity-70">
            <HarboLogo />
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/icons/chipp.png"
              alt="Paypass"
              width={30}
              height={30}
              className="opacity-90 bg-transparent"
            />
            <Image
              src="/icons/Paypass.svg"
              alt="Paypass"
              width={30}
              height={30}
              className="opacity-90"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-2xl tracking-[0.2em] font-medium">
            {cardNumber.match(/.{1,4}/g)?.join(" ")}
          </div>

          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <p className="text-xs opacity-75">CARDHOLDER NAME</p>
              <p className="font-medium tracking-wider">{cardholderName}</p>
            </div>
            <div className="text-right">
              <div className="space-y-2">
                <p className="text-xs opacity-75">VALID THRU</p>
                <p className="font-medium tracking-wider">{expiryDate}</p>
              </div>
              <Image
                src="/icons/mastercard.svg"
                alt="Mastercard"
                width={60}
                height={40}
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
