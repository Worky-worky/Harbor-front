'use client'
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Transaction, generateTransactionHistory } from "@/lib/generateTransactionHistory"
import { TransactionCard } from "@/components/cards/TransactionsCard"
import { Userinfo, getUserByEmail } from "@/data/users"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function TransactionHistory() {
  const [currentUser, setCurrentUser] = useState<Userinfo | null>(null)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const transactionsPerPage = 20

  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem("userEmail")
    if (loggedInUserEmail) {
      const user = getUserByEmail(loggedInUserEmail)
      if (user) {
        setCurrentUser(user)
        const storedTransactions = localStorage.getItem(`transactions_${loggedInUserEmail}`)
        if (storedTransactions) {
          const parsedTransactions = JSON.parse(storedTransactions).map((t: any) => ({
            ...t,
            date: new Date(t.date)
          }))
          setTransactions(parsedTransactions)
        } else {
          const generatedTransactions = generateTransactionHistory(loggedInUserEmail)
          localStorage.setItem(`transactions_${loggedInUserEmail}`, JSON.stringify(generatedTransactions))
          setTransactions(generatedTransactions)
        }
      }
    }
  }, [])

  const indexOfLastTransaction = currentPage * transactionsPerPage
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)
  const totalPages = Math.ceil(transactions.length / transactionsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextPage = () => paginate(Math.min(currentPage + 1, totalPages))
  const prevPage = () => paginate(Math.max(currentPage - 1, 1))
  const firstPage = () => paginate(1)
  const lastPage = () => paginate(totalPages)

  function getInitials(firstName: string, lastName: string): React.ReactNode {
    if (!firstName || !lastName) return "U"
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  return (
    <div className="mx-auto mt-5 max-w-6xl">
      <div className="sticky w-full top-0 z-50 bg-gray-100 border-b">
        <div className="flex justify-between items-center p-2">
          <div>
            <h1 className="text-1xl font-bold">Transaction History</h1>
            <p className="text-muted-foreground">See your bank details and transactions.</p>
          </div>

          <div className="flex items-center gap-2">
            <Avatar className="h-12 w-12 border-2 border-primary">
              <AvatarImage
                src={currentUser?.avatar || "/placeholder.svg"}
                alt={`${currentUser?.firstName} ${currentUser?.lastName}`}
              />
              <AvatarFallback>
                {currentUser ? getInitials(currentUser.firstName, currentUser.lastName) : "U"}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Card className="bg-primary text-white mb-8 px-3">
          <CardContent className="p-2 px-3 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">
                {currentUser?.firstName} {currentUser?.lastName}
              </h2>
              <p className="text-blue-100">{currentUser?.accountType} Account</p>
              <p className="mt-1 text-blue-100">
                •••• •••• •••• {currentUser?.accountNumber.slice(-4)}
              </p>
            </div>

            <Card className="bg-primary text-white">
              <CardContent className="p-1 px-3">
                <TransactionCard />
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Merchant</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Channel</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.merchantName}</TableCell>
                <TableCell className={transaction.type === "debit" ? "text-red-500" : "text-green-600"}>
                  {transaction.type === "debit" ? "-" : "+"}${Math.abs(transaction.amount).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`rounded-full px-3 py-1 ${
                      transaction.status === "Pending"
                        ? "bg-gray-100 text-gray-600 border-gray-200"
                        : transaction.status === "Failed"
                        ? "bg-red-50 text-red-600 border-red-200"
                        : "bg-green-50 text-green-600 border-green-200"
                    }`}
                  >
                    <span
                      className={`mr-1.5 inline-block w-2 h-2 rounded-full ${
                        transaction.status === "Pending"
                          ? "bg-gray-500"
                          : transaction.status === "Failed"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                    ></span>
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>{transaction.date.toLocaleString()}</TableCell>
                <TableCell>{transaction.channel}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="rounded-full px-3 py-1 bg-blue-50 text-blue-600 border-blue-200">
                    <span className="mr-1.5 inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                    {transaction.category}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between px-2 py-4">
          <p className="text-sm text-muted-foreground">
            Showing {indexOfFirstTransaction + 1} to {Math.min(indexOfLastTransaction, transactions.length)} of{" "}
            {transactions.length} transactions
          </p>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={firstPage} disabled={currentPage === 1}>
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={prevPage} disabled={currentPage === 1}>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center space-x-1">
              {[...Array(totalPages)].map((_, idx) => (
                <Button
                  key={idx + 1}
                  variant={currentPage === idx + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => paginate(idx + 1)}
                >
                  {idx + 1}
                </Button>
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextPage} disabled={currentPage === totalPages}>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={lastPage} disabled={currentPage === totalPages}>
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
