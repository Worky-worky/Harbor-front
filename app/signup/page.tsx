"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { saveUser } from "@/data/userDatabase";
import { toast, Toaster } from "sonner";
import { messages } from "@/lib/messages";

export default function SignUpPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    dateOfBirth: "",
    ssn: "",
    accountType: "savings" as "savings" | "checking" | "both",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast(messages.auth.signupComingSoon, {
      position: "bottom-center",
      duration: 3000,
    });
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 overflow-y-auto">
          <div className="max-w-md w-full">
            <div className="text-center">
              <p className="font-bold text-md text-primary">
                Join Harborfront and experience modern banking
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="border-primary"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Last Name"
                  className="border-primary"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </div>

              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                className="border-primary"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <Input
                type="password"
                placeholder="Create Password"
                value={formData.password}
                className="border-primary"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />

              <Input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                className="border-primary"
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
              />

              <Input
                className="border-primary"
                type="tel"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
              />

              <Input
                type="text"
                className="border-primary"
                placeholder="Social Security Number"
                value={formData.ssn}
                onChange={(e) =>
                  setFormData({ ...formData, ssn: e.target.value })
                }
                required
              />

              <Input
                type="date"
                className="border-primary"
                placeholder="Date of Birth"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
                required
              />

              <select
                value={formData.accountType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    accountType: e.target.value as
                      | "savings"
                      | "checking"
                      | "both",
                  })
                }
                className="w-full p-2 border border-primary rounded"
              >
                <option value="savings">Savings Account</option>
                <option value="checking">Checking Account</option>
                <option value="both">Both Accounts</option>
              </select>

              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Create Account
              </Button>
            </form>
          </div>
        </div>

        {/* Right Column - Image/Info */}
        <div className="hidden lg:block relative w-2/5 flex-1 static">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="/motherDaughter.png"
            alt="Banking illustration"
            fill
          />
        </div>
      </div>
    </>
  );
}
