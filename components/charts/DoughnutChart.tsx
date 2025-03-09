"use client"
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { getUserByEmail } from "@/data/users"

ChartJS.register(ArcElement, Tooltip, Legend)

interface DoughnutChartProps {
  userEmail: string
}

const DoughnutChart = ({ userEmail }: DoughnutChartProps) => {
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [savings, setSavings] = useState(0)

  useEffect(() => {
    if (userEmail) {
      const user = getUserByEmail(userEmail)
      if (user) {
        setIncome(user.income)
        setExpenses(user.expenses)
        setSavings(user.savings)
      }
    }
  }, [userEmail])

  const data = {
    datasets: [
      {
        label: 'Financial Overview',
        data: [income, expenses, savings],
        backgroundColor: [
          'rgb(34, 197, 94)',
          'rgb(239, 68, 68)',
          'rgb(59, 130, 246)',
        ],
      }
    ],
    labels: ['Income', 'Expenses', 'Savings']
  }

  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <div className="w-full max-w-[500px]">
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            cutout: '60%',
            plugins: {
              legend: {
                position: 'right',
                align: 'center',
                labels: {
                  usePointStyle: true,
                  pointStyle: 'circle',
                  padding: 20,
                  font: {
                    size: 12
                  }
                }
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const value = context.raw as number
                    return `${context.label}: $${value.toLocaleString()}`
                  }
                }
              }
            }
          }}
        />
      </div>
    </div>
  )
}

export default DoughnutChart