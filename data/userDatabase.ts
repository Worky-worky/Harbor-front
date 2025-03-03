interface UserData {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    dateOfBirth: string
    ssn: string
    accountType: 'savings' | 'checking' | 'both'
    createdAt: Date
    balance: number
    transactions: Transaction[]
  }
  
  interface Transaction {
    id: string
    type: 'deposit' | 'withdrawal' | 'transfer'
    amount: number
    date: Date
    description: string
  }
  
  // Store users in localStorage
  export function saveUser(userData: Omit<UserData, 'id' | 'createdAt' | 'balance' | 'transactions'>) {
    const users = getAllUsers()
    const newUser: UserData = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date(),
      balance: 0,
      transactions: []
    }
    users.push(newUser)
    localStorage.setItem('bankUsers', JSON.stringify(users))
    return newUser
  }
  
  // Get all users
  export function getAllUsers(): UserData[] {
    const users = localStorage.getItem('bankUsers')
    return users ? JSON.parse(users) : []
  }
  
  // Get user by email
  export function getUserByEmail(email: string): UserData | null {
    const users = getAllUsers()
    return users.find(user => user.email === email) || null
  }
  
  // Get user by ID
  export function getUserById(id: string): UserData | null {
    const users = getAllUsers()
    return users.find(user => user.id === id) || null
  }
  
  // Update user data
  export function updateUser(id: string, updates: Partial<UserData>): UserData | null {
    const users = getAllUsers()
    const userIndex = users.findIndex(user => user.id === id)
    
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updates }
      localStorage.setItem('bankUsers', JSON.stringify(users))
      return users[userIndex]
    }
    return null
  }
  