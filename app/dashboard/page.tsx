"use client";

import ActionButtons from "@/components/acctionButtons";
import Header from "@/components/bank-dashboard/Header";
import MoneyFlowCard from "@/components/bank-dashboard/MoneyFlow";
import QuickStats from "@/components/bank-dashboard/QuickStats";
import RecentTransactions from "@/components/bank-dashboard/RecentTransactions";
import StatsCard from "@/components/cards/Stats-Card";
import UserBankCard from "@/components/cards/UserBankCard";
import QuickTransfer from "@/components/sendMoney/quick-transfer";

export default function Page() {
  return (
    <div className="flex-1 mt-4">
      <Header />
      <div className=" mb-6">
        <div className="flex-1">
          <StatsCard />
        </div>
      </div>

      <div className="flex flex-1 gap-4">
        <div className="grid gap-4">
          <QuickTransfer />
          <MoneyFlowCard />
        </div>

        <div className="w-full">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
}
