'use client'
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { getUserByEmail } from "@/data/users"
import { calculateTotalBalance, formatCurrency } from "@/lib/calculation"

interface CardData {
  id: number
  type: string
  color: string
  balance: number
  number: string
  expiry: string
  holder: string
  bank: string
  bankType: string
  bankName: string
}

export default function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [userCards, setUserCards] = useState<CardData[]>([])
  const [totalBalance, setTotalBalance] = useState(0)

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail')
    if (userEmail) {
      const user = getUserByEmail(userEmail)
      if (user) {
        const calculatedTotalBalance = calculateTotalBalance(
          user.income,
          user.expenses,
          user.savings
        )
        setTotalBalance(calculatedTotalBalance)

        setUserCards([
          {
            id: 1,
            type: "Main",
            color: "primary",
            balance: calculatedTotalBalance,
            number: user.accountNumber,
            expiry: "12/25",
            holder: `${user.firstName} ${user.lastName}`,
            bank: "Digital Bank",
            bankType: user.accountType,
            bankName: "Harbor Front",
          },
          // {
          //   id: 2,
          //   type: "Savings",
          //   color: "yellow",
          //   balance: calculatedTotalBalance,
          //   number: user.accountNumber,
          //   expiry: "12/25",
          //   holder: `${user.firstName} ${user.lastName}`,
          //   bank: "Digital Bank",
          //   bankType: "Savings"
          // },
          
        ])
      }
    }
  }, [])

  const getCardBackground = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-gradient-to-br from-primary to-primary/80"
      case "yellow":
        return "bg-gradient-to-br from-yellow-400 to-yellow-600"
      case "third":
        return "bg-gradient-to-br from-indigo-500 to-indigo-700"
      case "secondary":
        return "bg-gradient-to-br from-secondary to-secondary/80"
      default:
        return "bg-gradient-to-br from-primary to-primary/80"
    }
  }

  return (
    <div className="flex overflow-x-auto gap-4 pb-4 -mx-2 px-2 snap-x">
      {userCards.map((card, index) => (
        <div
          key={card.id}
          className={cn(
            "min-w-[320px] snap-center transform transition-transform duration-300",
            index === activeIndex ? "scale-100" : "scale-95"
          )}
          onClick={() => setActiveIndex(index)}
        >
          <Card
            className={cn(
              "h-48 rounded-xl p-6 text-white relative overflow-hidden",
              getCardBackground(card.color)
            )}
          >
            <div className="flex flex-col justify-between h-full relative z-10">
              <div>
                <p className="text-sm opacity-90">{card.type} Balance</p>
                <p className="text-2xl font-bold mt-1">
                  {formatCurrency(card.balance)}
                </p>
              </div>

              <div>
                <div className="flex gap-2 mb-4">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full"></div>
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full -ml-4"></div>
                </div>

                <p className="text-sm opacity-90">
                  •••• •••• •••• {card.number.slice(-4)}
                </p>

                <div className="flex justify-between">
                  <div>
                    <p className="text-xs opacity-70">VALID THRU</p>
                    <p className="text-sm">{card.expiry}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-70">CARD HOLDER</p>
                    <p className="text-sm">{card.holder}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white opacity-5 -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white opacity-5 -ml-10 -mb-10"></div>
          </Card>
        </div>
      ))}
    </div>
  )
}