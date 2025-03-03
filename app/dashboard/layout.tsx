import Sidebar from "@/components/bank-dashboard/SideBar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <main className="mx-auto max-w-7xl px-4 md:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}
