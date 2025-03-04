'use client'
import { useState } from 'react'
import Sidebar from '@/components/bank-dashboard/SideBar'
import { getContentWidth } from '@/components/utils'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const width = getContentWidth(sidebarOpen)

  return (
    <div className="flex bg-gray-100">
      <Sidebar  />
      <main className={width.container}>
        <div className={width.content}>
          {children}
        </div>
      </main>
    </div>
  )
}
