"use client";
import { Userinfo, getUserByEmail } from "@/data/users";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { calculateTotalBalance, formatCurrency } from "@/lib/calculation";

interface UserBankCardProps {
  size?: "sm" | "md" | "lg";
  width?: "full" | "half" | "third";
  className?: string;
}

const UserBankCard = ({
  size = "md",
  width = "full",
  className = "",
}: UserBankCardProps) => {
  const [user, setUser] = useState<Userinfo | null>(null);

  const sizeClasses = {
    sm: "h-[160px]",
    md: "h-[220px]",
    lg: "h-[280px]",
  };

  const widthClasses = {
    full: "w-full",
    half: "w-1/2",
    third: "w-1/3",
  };

  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem("userEmail");
    if (loggedInUserEmail) {
      const currentUser = getUserByEmail(loggedInUserEmail);
      if (currentUser) {
        setUser(currentUser);
      }
    }
  }, []);

  if (!user) return null;

  const totalBalance = calculateTotalBalance(
    user.income,
    user.expenses,
    user.savings
  );

  return (
    <div className={`${widthClasses[width]} ${className}`}>
      <Link href={`/account/${user.id}`} className="block">
        <div
          className={`relative ${sizeClasses[size]} bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/icons/lines.png"
              fill
              alt="card pattern"
              className="object-cover w-full"
            />
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1
                  className={`${
                    size === "sm" ? "text-base" : "text-lg"
                  } font-semibold text-white`}
                >
                  Main Balance
                </h1>
                <p
                  className={`font-ibm-plex-serif ${
                    size === "sm" ? "text-xl" : "text-2xl"
                  } font-black text-white`}
                >
                  {formatCurrency(totalBalance)}
                </p>
              </div>

              <Image
                src="/icons/mastercard.svg"
                width={size === "sm" ? 35 : 45}
                height={size === "sm" ? 25 : 32}
                alt="mastercard"
                className="opacity-90"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <h2 className="text-sm font-semibold text-white/90">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-sm font-semibold text-white/90 pr-20">
                  ●● / ●●
                </p>
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
                      width={size === "sm" ? 25 : 30}
                      height={size === "sm" ? 25 : 30}
                      alt="pay"
                      className="opacity-90"
                    />
                    <Image
                      src="/icons/Paypass.svg"
                      width={size === "sm" ? 15 : 20}
                      height={size === "sm" ? 20 : 24}
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
