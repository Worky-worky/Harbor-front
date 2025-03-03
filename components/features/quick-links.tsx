import Link from 'next/link'
import { CreditCard, PiggyBank, Home, Building2, Briefcase } from 'lucide-react'

const quickLinksData = [
  {
    icon: <CreditCard className="h-10 w-10" />,
    label: "Credit Cards",
  },
  {
    icon: <PiggyBank className="h-10 w-10" />,
    label: "Checking Solutions",
  },
  {
    icon: <Home className="h-10 w-10" />,
    label: "Mortgage"
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    label: "Personal Loans",
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    label: "Investing Options",
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    label: "Small Business",
  },
]

export function QuickLinks() {
  return (
    <section className="border rounded-lg">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinksData.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="flex flex-col items-center text-center p-6 rounded-lg"
            >
              <div className="text-primary hover:text-primary/80 transition-all duration-300 hover:rotate-6 hover:scale-125">
                {item.icon}
              </div>
              <span className="mt-3 text-sm font-medium text-primary">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
