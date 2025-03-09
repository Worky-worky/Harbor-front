import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import CardCarousel from "../cardManagement/card-carousel";
import UserBankCard from "./UserBankCard";
import { useEffect, useState } from "react";
import { getUserByEmail } from "@/data/users";
import { calculateTotalBalance, formatCurrency } from "@/lib/calculation";

interface StatData {
  title: string;
  amount: string;
  change: string;
  changeType: "up" | "down";
  chartPath: string;
  iconBg: string;
  iconStroke: string;
}

export default function StatsCard() {
  const [statsData, setStatsData] = useState<StatData[]>([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      const user = getUserByEmail(userEmail);
      if (user) {
        const incomeChange = "+27.5%"; // Example change value, replace with actual calculation
        const expenseChange = "-15.5%"; // Example change value, replace with actual calculation

        const newStatsData: StatData[] = [
          {
            title: "Income",
            amount: formatCurrency(user.income),
            change: incomeChange,
            changeType: "up",
            chartPath:
              "M0,50 C20,40 40,80 60,50 C80,20 100,60 120,50 C140,40 160,80 180,50 C200,20 220,60 240,30 C260,10 280,30 300,10",
            iconBg: "bg-indigo-100",
            iconStroke: "#5E5CE6",
          },
          {
            title: "Expense",
            amount: formatCurrency(user.expenses),
            change: expenseChange,
            changeType: "down",
            chartPath:
              "M0,70 C20,40 40,80 60,60 C80,40 100,60 120,40 C140,20 160,60 180,40 C200,20 220,60 240,40 C260,20 280,60 300,30",
            iconBg: "bg-secondary",
            iconStroke: "#E53E3E", // Red color for expenses
          },
        ];

        setStatsData(newStatsData);
      }
    }
  }, []);

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2">
        {/* User Bank Card */}
        <div className="flex-1 h-full">
          <UserBankCard />
        </div>

        {/* Income and Expense Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
          {statsData.map((stat, index) => (
            <div key={index} className="rounded-3xl shadow-sm h-68 p-3 py-6 border-b border-primary">
              <div className="flex items-center mb-2 py-2 ">
                <div className={`w-12 h-12 ${stat.iconBg} rounded-full flex items-center justify-center mr-2`}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke={stat.iconStroke}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V16"
                      stroke={stat.iconStroke}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H16"
                      stroke={stat.iconStroke}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-gray-500">{stat.title}</div>
                <div className={`ml-auto flex flex-col items-center text-${stat.changeType === "up" ? "green" : "red"}-500 text-sm`}>
                  {stat.changeType === "up" ? (
                    <ArrowUpIcon className="w-3 h-3 mr-1" />
                  ) : (
                    <ArrowDownIcon className="w-3 h-3 mr-1" />
                  )}
                  <span>{stat.change}</span>
                  <span className="text-xs text-gray-400">last month</span>
                </div>
              </div>
              <div className="flex text-center justify-center font-medium px-6">{stat.amount}</div>

              {/* Chart */}
              <svg
                className="w-40 h-24 flex items-center justify-center mx-auto mt-"
                viewBox="0 0 300 100"
                preserveAspectRatio="none"
              >
                <path
                  d={stat.chartPath}
                  fill="none"
                  stroke={stat.iconStroke}
                  strokeWidth="3"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}