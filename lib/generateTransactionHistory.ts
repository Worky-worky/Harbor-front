import { Userinfo, getUserByEmail } from "@/data/users";

type Channel = 'Online' | 'In Store' | 'Mobile' | 'ATM' | 'Bank Transfer';
const channels: Channel[] = ['Online', 'In Store', 'Mobile', 'ATM', 'Bank Transfer'];

export interface Transaction {
  id: string;
  date: Date;
  merchantName: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
  status: 'Success' | 'Pending' | 'Failed';
  channel: 'Online' | 'In Store' | 'Mobile' | 'ATM' | 'Bank Transfer';
  reference: string;
}

export function generateTransactionHistory(userEmail: string): Transaction[] {
  const storedTransactions = localStorage.getItem(`transactions_${userEmail}`)
  if (storedTransactions) {
    const parsed = JSON.parse(storedTransactions)
    return parsed.map((t: any) => ({
      ...t,
      date: new Date(t.date)
    }))
  }

  const user = getUserByEmail(userEmail);
  if (!user) {
    return [];
  }

  // Generate transactions based on user's financial data
  const maxDebitAmount = user.expenses * 0.3 // Limit debit transactions
  const maxCreditAmount = user.income * 0.5 // Limit credit transactions

  const transactions: Transaction[] = [];

  // Add high-value business merchants
  const merchants = {
    retail: [
      'Amazon', 'Walmart', 'Target', 'Best Buy', 'Apple Store', 'Nike', 'Adidas'
    ],
    food: [
      'Uber Eats', 'DoorDash', 'Whole Foods', 'Trader Joe\'s', 'Starbucks', 'Chipotle'
    ],
    travel: [
      'United Airlines', 'Delta Airlines', 'Airbnb', 'Uber', 'Lyft', 'Expedia'
    ],
    entertainment: [
      'Netflix', 'Spotify', 'Amazon Prime', 'Disney+', 'HBO Max', 'Steam'
    ],
    utilities: [
      'AT&T', 'Verizon', 'ComEd', 'PG&E', 'American Water'
    ],
    business: [
      'Microsoft 365', 'Adobe Creative Cloud', 'WeWork', 'Zoom', 'Slack'
    ],
    enterprise: [
      'Goldman Sachs Investment', 'BlackRock Capital', 'Morgan Stanley Ventures',
      'JP Morgan Chase', 'Berkshire Hathaway', 'Tesla Corporation', 'Apple Inc',
      'Microsoft Enterprise', 'Amazon Business', 'Google Ventures'
    ]
  }
  
  const categories = {
    credit: [
      { 
        name: 'Corporate Investment', 
        merchants: merchants.enterprise,
        minAmount: 100000,
        maxAmount: 5000000
      },
      { 
        name: 'Salary', 
        merchants: ['Employer Payroll'],
        minAmount: 10000,
        maxAmount: 50000
      },
      { 
        name: 'Investment Returns', 
        merchants: ['Robinhood', 'Fidelity', 'Charles Schwab'],
        minAmount: 50000,
        maxAmount: 1000000
      }
    ],
    debit: [
      { name: 'Shopping', merchants: merchants.retail },
      { name: 'Food & Dining', merchants: merchants.food },
      { name: 'Travel', merchants: merchants.travel },
      { name: 'Entertainment', merchants: merchants.entertainment },
      { name: 'Utilities', merchants: merchants.utilities },
      { name: 'Business', merchants: merchants.business }
    ]
  }

  const now = new Date();
  const transactionCount = 100; // Maximum number of transactions

  for (let i = 0; i < transactionCount; i++) {
    const isHighValue = Math.random() > 0.7;
    const type = isHighValue ? 'credit' : (Math.random() > 0.6 ? 'credit' : 'debit');
    const category = randomItem(categories[type]);
    
    let amount;
    if (isHighValue && type === 'credit' && 'maxAmount' in category && 'minAmount' in category) {
      amount = Math.floor(Math.random() * ((category as any).maxAmount - (category as any).minAmount) + (category as any).minAmount);
    } else {
      amount = type === 'credit' 
        ? Math.floor(user.income * (Math.random() * 0.5 + 0.5))
        : Math.floor(user.expenses * (Math.random() * 0.3 + 0.1));
    }

    transactions.push({
      id: generateId(),
      date: randomDateInRange(now, 90), // 3 months range
      merchantName: randomItem(category.merchants),
      description: `${category.name} ${type === 'credit' ? 'Payment' : 'Purchase'}`,
      amount: type === 'debit' ? -amount : amount,
      type,
      category: category.name,
      status: randomStatus(),
      channel: randomItem(channels),
      reference: generateReference()
    });
  }

  localStorage.setItem(`transactions_${userEmail}`, JSON.stringify(transactions))
  return transactions.sort((a, b) => b.date.getTime() - a.date.getTime());
}
function randomDateInRange(now: Date, days: number): Date {
  const date = new Date(now);
  date.setDate(date.getDate() - Math.floor(Math.random() * days));
  return date;
}

// Helper functions
function generateReference(): string {
  return `TXN${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
}

function randomStatus(): 'Success' | 'Pending' | 'Failed' {
  const rand = Math.random();
  if (rand > 0.95) return 'Failed';
  if (rand > 0.85) return 'Pending';
  return 'Success';
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function randomDateInMonth(now: Date, monthsAgo: number): Date {
  const date = new Date(now);
  date.setMonth(date.getMonth() - monthsAgo);
  date.setDate(Math.floor(Math.random() * getDaysInMonth(date.getMonth(), date.getFullYear())));
  return date;
}

function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function splitAmount(total: number, parts: number): number[] {
  const amounts: number[] = [];
  let remaining = total;
  
  for (let i = 0; i < parts - 1; i++) {
    const amount = Math.round((Math.random() * 0.5 + 0.5) * (remaining / (parts - i)));
    amounts.push(amount);
    remaining -= amount;
  }
  amounts.push(remaining);
  
  return amounts;
}  