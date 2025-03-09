"use client"

import { Card, CardContent } from "../ui/card"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { useState, useEffect } from 'react'
import { getUserByEmail, getUserById, Userinfo } from '@/data/users'
import { formatCurrency } from '@/lib/calculation'
import UserBankCard from "../cards/UserBankCard"
import ActionButtons from "../acctionButtons"

ChartJS.register(ArcElement, Tooltip, Legend)

const MoneyFlowCard = () => {
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

  const data = {
    labels: ['Income', 'Expenses', 'Net Flow'],
    datasets: [{
      data: [
        user?.income || 0,
        user?.expenses || 0,
        (user?.income || 0) - (user?.expenses || 0)
      ],
      backgroundColor: [
        'rgb(34, 197, 94)',
        'rgb(239, 68, 68)',
        'rgb(59, 130, 246)'
      ],
      borderWidth: 0
    }]
  }

  const currentUser = getUserById('1')

  return (
    <div className="grid gap-4"> 
      {/* Chart Card */}
      <Card>
        <CardContent className="flex items-start justify-between p-4">
          <div className="flex flex-col gap-4 py-10">
            {data.labels.map((label, index) => (
              <div key={label} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                />
                <span className="text-sm font-medium">{label}</span>
                <span className="text-sm text-muted-foreground">
                  {formatCurrency(data.datasets[0].data[index])}
                </span>
              </div>
            ))}
          </div>
          
          <div className="w-[200px] h-[200px]">
            <Doughnut 
              data={{
                ...data,
                labels: []
              }} 
              options={{
                cutout: '60%',
                plugins: {
                  legend: {
                    display: false
                  },
                  tooltip: {
                    callbacks: {
                      label: (context: any) => {
                        return `${data.labels[context.dataIndex]}: ${formatCurrency(context.raw)}`
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MoneyFlowCard
