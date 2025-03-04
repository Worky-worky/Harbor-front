'use client'
import { Userinfo, getUserByEmail } from "@/data/users"
import { useEffect, useState } from "react"
import { calculateTotalBalance, formatCurrency } from "@/lib/calculation"

export function TransactionCard() {
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

  if (!user) return null

  const totalBalance = calculateTotalBalance(user.income, user.expenses, user.savings)

  return (
    <div className="flex flex-col">
      <h2 className="text-sm font-bold">Account Balance</h2>
      <p className="text-2xl font-bold text-white">
        {formatCurrency(totalBalance)}
      </p>
    </div>
  )
}
