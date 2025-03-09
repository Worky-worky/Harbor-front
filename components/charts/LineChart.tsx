"use client"
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { getUserByEmail,  } from '@/data/users'
import { generateTransactionHistory } from '@/lib/generateTransactionHistory'

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale)

interface LineChartProps {
  userEmail: string
}

const LineChart = ({ userEmail }: LineChartProps) => {
  const [income, setIncome] = useState<number[]>([])
  const [expenses, setExpenses] = useState<number[]>([])
  const [savings, setSavings] = useState<number[]>([])
  const [labels, setLabels] = useState<string[]>([])

  useEffect(() => {
    if (userEmail) {
      const user = getUserByEmail(userEmail)
      if (user) {
        const transactions = generateTransactionHistory(userEmail)

        const incomeData: number[] = []
        const expensesData: number[] = []
        const savingsData: number[] = []
        const labelsData: string[] = []

        transactions.forEach(transaction => {
          labelsData.push(transaction.date.toLocaleDateString())
          if (transaction.type === 'credit') {
            incomeData.push(transaction.amount)
          } else if (transaction.type === 'debit') {
            expensesData.push(transaction.amount)
          }
          savingsData.push(user.savings)
        })

        setIncome(incomeData)
        setExpenses(expensesData)
        setSavings(savingsData)
        setLabels(labelsData)
      }
    }
  }, [userEmail])

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Income',
        data: income,
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
      },
      {
        label: 'Expenses',
        data: expenses,
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        fill: true,
      },
      {
        label: 'Savings',
        data: savings,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Financial Overview',
      },
    },
  }

  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="w-full max-w-[800px]">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default LineChart