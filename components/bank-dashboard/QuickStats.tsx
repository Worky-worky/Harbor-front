"use client"

import { useState, useEffect } from 'react'
import { getUserByEmail, Userinfo } from '@/data/users'
import { Wallet, DollarSign, CreditCard, PieChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { calculateTotalBalance, formatCurrency } from '@/lib/calculation'

export default function QuickStats() {
  const [user, setUser] = useState<Userinfo | null>(null)

  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem('userEmail')
    if (loggedInUserEmail) {
      const currentUser = getUserByEmail(loggedInUserEmail)
      if (currentUser) {
        setUser(currentUser)
      }
    }
  }, [])

  const totalBalance = user ? calculateTotalBalance(
    user.income,
    user.expenses,
    user.savings
  ) : 0


  return (
    <div className="mb-6 grid gap-6 md:grid-cols-4">
      <QuickStatCard
        title="Total Balance"
        value={formatCurrency(totalBalance)}
        change="+12.5%"
        trend="up"
        icon={<Wallet className="h-5 w-5 text-blue-600" />}
      />
      <QuickStatCard
        title="Total Income"
        value={formatCurrency(user?.income || 0)}
        change="+37.3%"
        trend="up"
        icon={<DollarSign className="h-5 w-5 text-green-600" />}
      />
      <QuickStatCard
        title="Total Expenses"
        value={formatCurrency(user?.expenses || 0)}
        change="-10.4%"
        trend="down"
        icon={<CreditCard className="h-5 w-5 text-red-600" />}
      />
      <QuickStatCard
        title="Savings"
        value={formatCurrency(user?.savings || 0)}
        change="+18.1%"
        trend="up"
        icon={<PieChart className="h-5 w-5 text-purple-600" />}
      />
    </div>
  )
}

interface QuickStatCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: React.ReactNode
}

function QuickStatCard({ title, value, change, trend, icon }: QuickStatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text- font-bold">{value}</div>
        <p className={`text-xs ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
          {change} from last month
        </p>
      </CardContent>
    </Card>
  )
}
