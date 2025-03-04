import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CreditCard,
  Home,
  PiggyBank,
  Building2,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import {
  Container,
  FeaturedProducts,
  Logo,
  Navigation,
  TopBar,
} from "@/components/utils";
import { AuthForm } from "@/components/AuthForm";
import { QuickLinks } from "@/components/features/quick-links";
import { GlassyBg } from "@/components/backgrounds/Glassybg";
import CardShowcase from "@/components/Card-showcase";
import ShopSave from "@/components/Shopsave";
import BankingMatch from "@/components/BankingMatch";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignUpPage from "./signup/page";
import BankingNeeds from "@/components/bank-dashboard/BankingNeeds";

export default function HarborfrontLanding() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Top Bar */}
      <div className="w-full bg-muted">
        <TopBar />
      </div>

      {/* Main Navigation */}
      <header className="border-b shadow-md w-full">
        <div className="py-4 bg-secondary w-full">
          <Container>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-8">
                <Logo />
                <Navigation />
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Open an Account</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] my-8 max-h-[80vh] overflow-y-auto rounded-xl">
                  <DialogTitle className="hidden">
                    Create Your Account
                  </DialogTitle>
                  <SignUpPage />
                </DialogContent>
              </Dialog>
            </div>
          </Container>
        </div>
      </header>

      {/* Hero Section */}
      <Container>
        <section className="relative z-10">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex justify-between items-center">
              <div className="space-y-6 p-6 max-w-md">
                <div className="space-y-2">
                  <h2 className="text-sm font-semibold text-primary">
                    HARBORFRONT CHECKING ACCOUNTS
                  </h2>
                  <h1 className="text-4xl font-bold">
                    Open. Deposit. Earn $500.
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Earn a bonus when you open an eligible checking account with
                    Enhanced Direct Deposits & required activities.
                  </p>
                </div>
                <Button className="bg-primary text-white hover:bg-primary/90 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="relative h-[330px] w-full overflow-hidden image-blur-wrapper">
                <Image
                  src="/family.png"
                  alt="Happy customers"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="relative py-8">
                <AuthForm />
              </div>
            </div>
          </div>

          <div className="">
            <QuickLinks />
          </div>
        </section>
      </Container>

      {/* Featured Products */}
      <section>
        <FeaturedProducts />
      </section>

      <section>
        <BankingNeeds />
      </section>

      <section>
        <CardShowcase />
      </section>

      <section>
        <BankingMatch />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
