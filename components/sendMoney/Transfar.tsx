"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function PaymentTransfer() {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [plaidId, setPlaidId] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ amount, email, plaidId, note });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Payment Transfer</h1>
        <p className="text-gray-500 mt-1">
          Please provide any specific details or notes related to the payment transfer.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Transfer Details</h2>
          <p className="text-gray-500 text-sm">Enter your transfer details.</p>

          <div className="space-y-2">
            <Label htmlFor="source-bank">Select Source Bank</Label>
            <p className="text-xs text-gray-500">Select the bank account you want to transfer funds from.</p>
            <Select defaultValue="plaid">
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-gray-500" />
                  <SelectValue placeholder="Select a bank account" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plaid">Harbor Checking</SelectItem>
                {/* <SelectItem value="chase">Chase Savings</SelectItem>
                <SelectItem value="wells">Wells Fargo</SelectItem> */}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="note">Transfer Note (Optional)</Label>
            <p className="text-xs text-gray-500">
              Please provide any additional information or instructions related to the transfer.
            </p>
            <Textarea
              id="note"
              placeholder="Write a short note here"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="resize-none"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Bank Account Details</h2>
          <p className="text-gray-500 text-sm">Enter the bank account details of the recipient.</p>

          <div className="space-y-2">
            <Label htmlFor="email">Recipient's Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="ex: johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="plaid-id">Receiver's Bank Account</Label>
            <Input
              id="plaid-id"
              placeholder="Enter the public account number"
              value={plaidId}
              onChange={(e) => setPlaidId(e.target.value)}
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              placeholder="ex: 5.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-gray-300"
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg">
          Transfer Funds
        </Button>
      </form>
    </div>
  );
}