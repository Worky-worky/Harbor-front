"use client"
import { useState } from "react"
import { ArrowUpRight, ArrowDownRight, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../ui/card"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

const transactions = [
  {
    id: 1,
    name: "Gilbert & Sons",
    type: "credit",
    amount: 22000.00,
    date: "Mar 2, 2025",
    time: "11:20:15 AM",
    status: "Completed",
    direction: "incoming",
  },

  {
    id: 2,
    name: "Liebherr's construction",
    type: "Debit",
    amount: 420000.00,
    date: "Mar 2, 2025",
    time: "11:20:15 AM",
    status: "Completed",
    direction: "outgoing",
  },

  {
    id: 3,
    name: "Williams Sonoma",
    type: "Credit",
    amount: 14750.00,
    date: "Mar 1, 2025",
    time: "04:34:45 AM",
    status: "Completed",
    direction: "incoming",
  },
  {
    id: 4,
    name: "ATG’s Civil Production...",
    type: "Credit",
    amount: 33450000,
    date: "Feb 16, 2025",
    time: "09:00:00 AM",
    status: "Completed",
    direction: "incoming",
  },
  {
    id: 5,
    name: "Walmart Groceries",
    type: "Shopping",
    amount: 156.32,
    date: "Jan 19, 2025",
    time: "02:15:30 PM",
    status: "Pending",
    direction: "outgoing",
  },
  
  {
    id: 6,
    name: "Uber Ride",
    type: "Transportation",
    amount: 24.50,
    date: "Jan 10, 2025",
    time: "08:45:22 PM",
    status: "Completed",
    direction: "outgoing",
  },

  {
    id: 7,
    name: "Donald Woods",
    type: "debit",
    amount: 70000,
    date: "Jan 10, 2025",
    time: "08:45:22 PM",
    status: "Completed",
    direction: "outgoing",
  },
]

export default function RecentTransactions() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalItems = 100
  const itemsPerPage = 5

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-emerald-500"
      case "Canceled":
        return "text-red-500"
      case "Pending":
        return "text-gray-400"
      default:
        return "text-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Recent Transactions</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View all transactions</DropdownMenuItem>
            <DropdownMenuItem>Export as CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent>
        <div className="space-y-2">
          {transactions.map((transaction) => (
            <Card key={transaction.id} className="p-3 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    transaction.direction === "outgoing" ? "bg-red-100" : "bg-emerald-100"
                  }`}>
                    {transaction.direction === "outgoing" ? (
                      <ArrowUpRight className="text-red-500" size={16} />
                    ) : (
                      <ArrowDownRight className="text-emerald-500" size={16} />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-800">{transaction.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{transaction.type}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{transaction.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">$ {transaction.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                  <div className="w-20 text-right">
                    <p className={`text-xs font-medium ${getStatusColor(transaction.status)}`}>{transaction.status}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>

      {/* <CardFooter className="flex items-center justify-between pt-">
        <p className="text-sm text-gray-500">Showing 1-5 from {totalItems} data</p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              className={`h-8 w-8 rounded-full ${
                currentPage === page ? "bg-primary hover:bg-primary/90" : "text-gray-600"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter> */}
    </Card>
  )
}
