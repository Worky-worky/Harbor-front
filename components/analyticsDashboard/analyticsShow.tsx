"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Download } from "lucide-react"
import { Bar, Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState("retail")

  // Monthly data for the bar chart
  const months = [
    "December 2022",
    "January 2023",
    "February 2023",
    "March 2023",
    "April 2023",
    "May 2023",
    "June 2023",
    "July 2023",
    "August 2023",
    "September 2023",
    "October 2023",
    "November 2023",
  ]

  const totalUsersData = [75, 130, 180, 190, 210, 300, 310, 330, 380, 410, 450, 500]
  const activeUsersData = [5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 15, 40]

  // Data for the bar chart
  const barChartData = {
    labels: months,
    datasets: [
      {
        label: "Total Users",
        data: totalUsersData,
        backgroundColor: "#2A7B8B",
        barPercentage: 0.6,
      },
      {
        label: "Active Users",
        data: activeUsersData,
        backgroundColor: "#E67E22",
        barPercentage: 0.6,
      },
    ],
  }

  // Options for the bar chart
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#E5E7EB",
        },
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
        },
      },
    },
  }

  // Data for the user status donut chart
  const userStatusData = {
    labels: ["Referral", "Active"],
    datasets: [
      {
        data: [9.6, 90.4],
        backgroundColor: ["#2A7B8B", "#E67E22"],
        borderWidth: 0,
      },
    ],
  }

  // Data for the touch points bar chart
  const touchPointsLabels = [
    "Mobile Application",
    "Web Portal",
    "SMS Service",
    "Home",
    "Kiosk",
    "Support",
    "Email Support",
    "Technical Support",
  ]

  const touchPointsData = {
    labels: touchPointsLabels,
    datasets: [
      {
        data: [12, 7, 2, 31, 4, 5, 11, 4],
        backgroundColor: "#2A7B8B",
        barPercentage: 0.6,
      },
    ],
  }

  // Data for the segment distribution donut chart
  const segmentData = {
    labels: ["Copper", "Diamond", "Silver", "Gold"],
    datasets: [
      {
        data: [26.1, 17.4, 21.7, 34.8],
        backgroundColor: ["#2A7B8B", "#5D4037", "#95A5A6", "#F39C12"],
        borderWidth: 0,
      },
    ],
  }

  // Options for the donut charts
  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
        },
      },
    },
  }

  // Options for the touch points bar chart
  const touchPointsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: "#E5E7EB",
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="w-40">
              <Select value={selectedOption} onValueChange={setSelectedOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="relative mb-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Total Users */}
            <div className="rounded-lg p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-600">Total Users</h3>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">Positive</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold">53</p>
                  <p className="text-xs text-gray-500">
                    <span className="text-gray-800">0% Month on month</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Active Users */}
            <div className="rounded-lg p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-600">Active Users</h3>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">Positive</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold">35</p>
                  <p className="text-xs text-gray-500">
                    <span className="text-gray-800">NaN% Month on month</span>
                  </p>
                </div>
                <p className="text-xs text-gray-500">last month</p>
              </div>
            </div>

            {/* Logins */}
            <div className="rounded-lg p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-600">Logins</h3>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">Positive</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold">497.43</p>
                  <p className="text-xs text-gray-500">
                    <span className="text-gray-800">↑ 4904.48% last month</span>
                  </p>
                </div>
                <p className="text-xs text-gray-500">per month</p>
              </div>
            </div>

            {/* Average Transactions */}
            <div className="rounded-lg p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-600">Average Transactions</h3>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">Positive</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold">99.13</p>
                  <p className="text-xs text-gray-500">
                    <span className="text-gray-800">↑ 9813.59% Month on month</span>
                  </p>
                </div>
                <p className="text-xs text-gray-500">per session</p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-1 shadow-md">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Total Users Chart */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Total Users</h2>
          <div className="h-80 w-full">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* User Status */}
          <div className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-4 text-lg font-semibold">User Status</h2>
            <div className="relative h-64">
              <Doughnut data={userStatusData} options={donutOptions} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-sm font-medium">83 Users</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#2A7B8B]"></div>
                <span className="text-xs">Referral</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#E67E22]"></div>
                <span className="text-xs">Active</span>
              </div>
            </div>
          </div>

          {/* Users by touch points */}
          <div className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-4 text-lg font-semibold">Users by touch points</h2>
            <div className="h-64">
              <Bar data={touchPointsData} options={touchPointsOptions} />
            </div>
          </div>

          {/* Segment Distribution */}
          <div className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-4 text-lg font-semibold">Segment Distribution</h2>
            <div className="relative h-64">
              <Doughnut data={segmentData} options={donutOptions} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-sm font-medium">23 Users</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#2A7B8B]"></div>
                <span className="text-xs">Copper</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#5D4037]"></div>
                <span className="text-xs">Diamond</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#95A5A6]"></div>
                <span className="text-xs">Silver</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#F39C12]"></div>
                <span className="text-xs">Gold</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

