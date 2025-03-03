'use client'

import Header from "@/components/bank-dashboard/Header"
import MoneyFlowCard from "@/components/bank-dashboard/MoneyFlow"
import QuickStats from "@/components/bank-dashboard/QuickStats"
import RecentTransactions from "@/components/bank-dashboard/RecentTransactions"

export default function Page() {
  return (
    <div className="flex-1">
      <Header />
      <QuickStats />
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <RecentTransactions />
        <MoneyFlowCard />
      </div>
    </div>
  )
}
