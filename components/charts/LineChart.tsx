"use client"
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface LineChartProps {
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      borderColor: string
      tension: number
    }[]
  }
}

export function LineChart({ data }: LineChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(this: any, value: string | number, index: number, ticks: any[]) {
            if (typeof value === 'number') {
              return value.toLocaleString()
            }
            return value
          }
        }
      }
    }
  }

  return (
    <div className="h-48 w-full">
      <Line data={data} options={options} />
    </div>
  )
}
