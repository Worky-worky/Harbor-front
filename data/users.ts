export interface Userinfo {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string
    role: 'user' | 'admin'
    accountNumber: string
    routingNumber: string
    accountType: 'checking' | 'savings'
    cardExpiryMonth: string
    cardExpiryYear: string
    cvv: string
    cardNetwork: 'visa' | 'mastercard' | 'amex'
    balance: number
    income: number
    expenses: number
    savings: number
    createdAt: Date
    lastLogin: Date
  }
  
  export const users: Userinfo[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@gmail.com',
      password: 'Password123',
      avatar: '/avatars/john.jpg',
      role: 'user',
      accountNumber: '4837203900947300',
      routingNumber: '021000021',
      accountType: 'checking',
      cardExpiryMonth: '12',
      cardExpiryYear: '2025',
      cvv: '123',
      cardNetwork: 'visa',
      balance: 25000,
      income: 97789063,
      expenses: 500000,
      savings: 500000,
      createdAt: new Date('2024-01-01'),
      lastLogin: new Date('2024-02-15')
    },
    {
      id: '2',
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah@gmail.com',
      password: 'Password456',
      avatar: '/avatars/sarah.jpg',
      role: 'user',
      accountNumber: '5555555555554444',
      routingNumber: '026009593',
      accountType: 'savings',
      cardExpiryMonth: '03',
      cardExpiryYear: '2026',
      cvv: '456',
      cardNetwork: 'mastercard',
      balance: 35000,
      income: 1000000,
      expenses: 500000,
      savings: 500000,
      createdAt: new Date('2024-01-15'),
      lastLogin: new Date('2024-02-14')
    },
    {
      id: '3',
      firstName: 'Cain',
      lastName: 'Brown',
      email: 'cain@gmail.com',
      password: 'Password236',
      avatar: '/avatars/cain.jpg',
      role: 'user',
      accountNumber: '378282246310005',
      routingNumber: '121000248',
      accountType: 'savings',
      cardExpiryMonth: '08',
      cardExpiryYear: '2024',
      cvv: '789',
      cardNetwork: 'amex',
      balance: 45000,
      income: 97789063,
      expenses: 23980393,
      savings: 10000000,
      createdAt: new Date('2024-01-15'),
      lastLogin: new Date('2024-02-14')
    }
  ]
  
  
  export function getUserById(id: string): Userinfo | undefined {
    return users.find(user => user.id === id)
  }
  
  export function getUserByEmail(email: string): Userinfo | undefined {
    return users.find(user => user.email === email)
  }
  