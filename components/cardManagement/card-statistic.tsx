import React from 'react'
import LineChart from '../charts/LineChart'
import { getUserByEmail } from "@/data/users"

const CardStatistic = () => {
  const userEmail = localStorage.getItem('userEmail')
  if (!userEmail) {
    return <div>Please log in to view your statistics.</div>
  }

  const user = getUserByEmail(userEmail)
  if (!user) {
    return <div>User not found.</div>
  }

  return (
    <div>
      <LineChart userEmail={userEmail} />
    </div>
  )
}

export default CardStatistic