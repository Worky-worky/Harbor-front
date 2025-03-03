import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Globe } from 'lucide-react'
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import HarboLogo from './logo/HarboLogo'

// Container Component
export function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    )
  }

// Navigation Items
const navigationItems = [
  { name: 'Credit Cards', href: '#' },
  { name: 'Banking', href: '#' },
  { name: 'Lending', href: '#' },
  { name: 'Investing', href: '#' },
  { name: 'Business', href: '#' },
]

// Navigation Component
export function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

// Logo Component
export function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold text-primary">
        <HarboLogo />
    </Link>
  )
}

// TopBar Component
export function TopBar() {
  return (
    <div className="w-full bg-muted py-5">
      <Container>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Image 
              src="/FDICLogo.svg.png"
              alt="FDIC Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <span>
              Insured - Backed by the full faith and credit of the U.S.
              Government
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline flex items-center gap-2">
              <MapPin size={16} />
              ATM / BRANCH
            </Link>
            <Link href="#" className="hover:underline flex items-center gap-2">
              <Globe size={16} />
              ESPAÑOL
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
 
const products = [
  {
    image: "/familyboat.png",
    alt: "Savings",
    tag: "HARBORFRONT SAVINGS ACCOUNTS",
    title: "Simplify your savings",
    description: "24/7 access to digital tools and money transfers with competitive rates."
  },
  {
    image: "/blackfam.jpg",
    alt: "Mortgage",
    tag: "MORTGAGE RELATIONSHIP PRICING",
    title: "Dream Bigger with a Mortgage Deal",
    description: "Banking customers can get special mortgage pricing and dedicated support."
  },
  {
    image: "/cuitgirl.jpg",
    alt: "Credit Card",
    tag: "HARBORFRONT PREFERRED®",
    title: "Save Big on Interest",
    description: "Enjoy a long-lasting intro APR, 21 months on Balance Transfers."
  }
]
 
export function FeaturedProducts() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="p-6 space-y-4">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-primary">
                  {product.tag}
                </h3>
                <h4 className="text-xl font-bold">{product.title}</h4>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
