"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { getUserByEmail } from '@/data/users'

export function AuthForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const user = getUserByEmail(email)
    
    if (user && user.password === password) {
      localStorage.setItem('userEmail', email)
      router.push('/dashboard')
    }
  }
  

  
  return (
    <div className="w-96 bg-white shadow-xl rounded-l-lg p-8 border-l border-y">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <div className="space-y-4">
            <div className='flex justify-between gap-5'>
              <Input 
                placeholder="Email" 
                className="h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input 
                type="password" 
                placeholder="Password" 
                className="h-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
           
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm">
                Remember Email
              </label>
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-base">
          Sign On
        </Button>
        <div className="text-sm space-y-3">
          <div className="flex justify-between">
            <Link href="#" className="text-primary hover:underline">Reset Password</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
