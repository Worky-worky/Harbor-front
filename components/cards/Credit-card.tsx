"use client";
import Image from "next/image";
import { PinIcon as Chip } from "lucide-react";

interface CreditCardProps {
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
}

export default function CreditCard({
  cardNumber = "7839 9038 9012 3603",
  cardholderName = "Georgia Franklin",
  expiryDate = "07/28",
}: CreditCardProps) {
  return (
    <div className="relative w-[425px] h-[270px] rounded-[20px] p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden shadow-lg">
      {/* Background Lines */}
      <Image
        src="/icons/Lines.svg"
        alt="Background Pattern"
        fill
        className="opacity-30 object-cover"
      />

      <div className="h-full flex flex-col justify-between text-white relative">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/chipp.png"
              alt="Chip"
              width={40}
              height={40}
              className="opacity-90 bg-transparent"
            />
            <Image
              src="/icons/Paypass.svg"
              alt="Paypass"
              width={40}
              height={40}
              className="opacity-90"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-2xl tracking-widest font-medium">
            {cardNumber.match(/.{1,4}/g)?.join(" ")}
          </div>

          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-xs opacity-75">CARDHOLDER NAME</p>
              <p className="font-medium tracking-wider">{cardholderName}</p>
            </div>
            <div className="text-right">
              <div className="space-y-1">
                <p className="text-xs opacity-75">VALID THRU</p>
                <p className="font-medium tracking-wider">{expiryDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Image
            src="/icons/mastercard.svg"
            alt="Mastercard"
            width={60}
            height={40}
            className="opacity-90"
          />
        </div>
      </div>
    </div>
  );
}