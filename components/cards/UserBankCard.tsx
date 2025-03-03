import { Userinfo } from "@/data/users";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HarboLogo from "../logo/HarboLogo";
import { calculateTotalBalance, formatCurrency } from "@/lib/calculation";

const UserBankCard = ({
  user,
  showBalance = true,
}: {
  user: Userinfo;
  showBalance?: boolean;
}) => {
  if (!user) return null;

  const totalBalance = user
    ? calculateTotalBalance(user.income, user.expenses, user.savings)
    : 0;

  return (
    <div className="w-full">
      <Link href={`/account/${user.id}`} className="block w-full">
        <div className="relative w-full h-[200px] bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/icons/lines.png"
              fill
              alt="card pattern"
              className="object-cover w-full"
            />
          </div>

          {/* Harbo Logo */}
          {/* <div className='absolute top-6 right-6 z-20'>
            <HarboLogo/>
          </div> */}

          {/* Card Content */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-lg font-semibold text-white">
                  Main Balance
                </h1>
                {showBalance && (
                  <p className="font-ibm-plex-serif text-2xl font-black text-white">
                    {formatCurrency(totalBalance)}
                  </p>
                )}
              </div>

              <Image
                src="/icons/mastercard.svg"
                width={45}
                height={32}
                alt="mastercard"
                className="opacity-90"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <h2 className="text-sm font-semibold text-white/90">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-sm font-semibold text-white/90 pr-20">●● / ●●</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm font-medium tracking-wider text-white/90">
                  ●●●● ●●●● ●●●●{" "}
                  <span className="text-white">
                    {user.accountNumber.slice(-4)}
                  </span>
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    <Image
                      src="/icons/chipp.png"
                      width={30}
                      height={30}
                      alt="pay"
                      className="opacity-90"
                    />
                    <Image
                      src="/icons/Paypass.svg"
                      width={20}
                      height={24}
                      alt="pay"
                      className="opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default UserBankCard;
