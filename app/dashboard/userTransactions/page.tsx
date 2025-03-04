"use client";
import { useEffect, useState } from "react";
import { CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Transaction,
  generateTransactionHistory,
} from "@/lib/generateTransactionHistory";
import UserBankCard from "@/components/cards/UserBankCard";
import { TransactionCard } from "@/components/cards/TransactionsCard";
import { Userinfo, getUserByEmail } from "@/data/users";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TransactionHistory() {
  const [currentUser, setCurrentUser] = useState<Userinfo | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem("userEmail");
    if (loggedInUserEmail) {
      const user = getUserByEmail(loggedInUserEmail);
      if (user) {
        setCurrentUser(user);
        const generatedTransactions =
          generateTransactionHistory(loggedInUserEmail);
        setTransactions(generatedTransactions);
      }
    }
  }, []);

  // Calculate total balance from transactions
  const totalBalance = transactions.reduce(
    (sum, transaction) =>
      sum +
      (transaction.type === "credit"
        ? transaction.amount
        : -transaction.amount),
    0
  );

  function getInitials(
    firstName: string,
    lastName: string
  ): import("react").ReactNode {
    if (!firstName || !lastName) return "U";
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  return (
    <div className="mx-auto mt-5 max-w-6xl">
      <div className="sticky w-full top-0 z-50 bg-gray-100 border-b">
      <div className=" flex justify-between items-center p-2 ">
        <div>
          <h1 className="text-1xl font-bold">Transaction History</h1>
          <p className="text-muted-foreground">
            See your bank details and transactions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Avatar className="h-12 w-12 border-2 border-primary">
            <AvatarImage
              src={currentUser?.avatar || "/placeholder.svg"}
              alt={`${currentUser?.firstName} ${currentUser?.lastName}`}
            />
            <AvatarFallback>
              {currentUser
                ? getInitials(currentUser.firstName, currentUser.lastName)
                : "U"}
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
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  {transaction.merchantName}
                </TableCell>
                <TableCell
                  className={
                    transaction.type === "debit"
                      ? "text-red-500"
                      : "text-green-600"
                  }
                >
                  {transaction.type === "debit" ? "-" : "+"}$
                  {Math.abs(transaction.amount).toLocaleString()}
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
                  <Badge
                    variant="outline"
                    className="rounded-full px-3 py-1 bg-blue-50 text-blue-600 border-blue-200"
                  >
                    <span className="mr-1.5 inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                    {transaction.category}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
