'use client'
import { useState } from 'react'
import { Transaction } from '@/lib/generateTransactionHistory'
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Edit2, Save, Trash2 } from 'lucide-react'

export function TransactionManager() {
  const [editMode, setEditMode] = useState(false)
  const userEmail = localStorage.getItem('userEmail') || ''
  const storedTransactions = localStorage.getItem(`transactions_${userEmail}`)
  const [transactions, setTransactions] = useState<Transaction[]>(
    storedTransactions ? JSON.parse(storedTransactions).map((t: any) => ({
      ...t,
      date: new Date(t.date)
    })) : []
  )

  const handleEdit = (id: string, updates: Partial<Transaction>) => {
    const updated = transactions.map(t => 
      t.id === id ? { ...t, ...updates } : t
    )
    setTransactions(updated)
    localStorage.setItem(`transactions_${userEmail}`, JSON.stringify(updated))
  }

  const handleDelete = (id: string) => {
    const filtered = transactions.filter(t => t.id !== id)
    setTransactions(filtered)
    localStorage.setItem(`transactions_${userEmail}`, JSON.stringify(filtered))
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Transaction Manager</h2>
        <Button
          onClick={() => setEditMode(!editMode)}
          variant={editMode ? "destructive" : "default"}
        >
          {editMode ? (
            <Save className="w-4 h-4 mr-2" />
          ) : (
            <Edit2 className="w-4 h-4 mr-2" />
          )}
          {editMode ? 'Save Changes' : 'Edit Transactions'}
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Merchant</th>
              <th className="text-left p-3">Amount</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Channel</th>
              <th className="text-left p-3">Category</th>
              {editMode && <th className="text-left p-3">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  {editMode ? (
                    <Input
                      value={transaction.merchantName}
                      onChange={e => handleEdit(transaction.id, { merchantName: e.target.value })}
                    />
                  ) : transaction.merchantName}
                </td>
                <td className="p-3">
                  {editMode ? (
                    <Input
                      type="number"
                      value={Math.abs(transaction.amount)}
                      onChange={e => handleEdit(transaction.id, { amount: Number(e.target.value) * (transaction.type === 'debit' ? -1 : 1) })}
                    />
                  ) : (
                    <span className={transaction.type === 'debit' ? "text-red-500" : "text-green-600"}>
                      {transaction.type === 'debit' ? "-" : "+"}${Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  )}
                </td>
                <td className="p-3">
                  {editMode ? (
                    <Select
                      value={transaction.status}

                      onValueChange={(value) => handleEdit(transaction.id, { status: value as Transaction['status'] })}
                    >
                      <option value="Success">Success</option>
                      <option value="Pending">Pending</option>
                      <option value="Failed">Failed</option>
                    </Select>
                  ) : (
                    <Badge variant="outline" className={
                      transaction.status === "Success" ? "bg-green-50 text-green-600" :
                      transaction.status === "Failed" ? "bg-red-50 text-red-600" :
                      "bg-gray-50 text-gray-600"
                    }>
                      {transaction.status}
                    </Badge>
                  )}
                </td>
                <td className="p-3">
                  {editMode ? (
                    <Input
                      type="datetime-local"
                      value={transaction.date.toISOString().slice(0, 16)}
                      onChange={e => handleEdit(transaction.id, { date: new Date(e.target.value) })}
                    />
                  ) : transaction.date.toLocaleString()}
                </td>
                <td className="p-3">
                  {editMode ? (
                    <Select
                      value={transaction.channel}
                      onValueChange={(value) => handleEdit(transaction.id, { channel: value as Transaction['channel'] })}
                    >
                      <option value="Online">Online</option>
                      <option value="In Store">In Store</option>
                      <option value="Mobile">Mobile</option>
                      <option value="ATM">ATM</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </Select>
                  ) : transaction.channel}
                </td>
                <td className="p-3">
                  <Badge variant="outline" className="bg-blue-50 text-blue-600">
                    {transaction.category}
                  </Badge>
                </td>
                {editMode && (
                  <td className="p-3">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(transaction.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )}
