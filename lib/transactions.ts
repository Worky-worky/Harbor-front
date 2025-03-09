import { getUserByEmail, Userinfo } from '@/data/users';

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

export function sendMoney(senderEmail: string, receiverEmail: string, amount: number): string {
  const sender = getUserByEmail(senderEmail);
  const receiver = getUserByEmail(receiverEmail);

  if (!sender) {
    return 'Sender not found';
  }

  if (!receiver) {
    return 'Receiver not found';
  }

  if (sender.balance < amount) {
    return 'Insufficient funds';
  }

  sender.balance -= amount;
  receiver.balance += amount;

  // Add transaction record for sender
  const senderTransaction: Transaction = {
    id: generateId(),
    date: new Date(),
    merchantName: `${receiver.firstName} ${receiver.lastName}`,
    description: `Transfer to ${receiver.firstName} ${receiver.lastName}`,
    amount: -amount,
    type: 'debit',
    category: 'Transfer',
    status: 'Success',
    channel: 'Bank Transfer',
    reference: generateReference()
  };
  addTransaction(sender.email, senderTransaction);

  // Add transaction record for receiver
  const receiverTransaction: Transaction = {
    id: generateId(),
    date: new Date(),
    merchantName: `${sender.firstName} ${sender.lastName}`,
    description: `Transfer from ${sender.firstName} ${sender.lastName}`,
    amount: amount,
    type: 'credit',
    category: 'Transfer',
    status: 'Success',
    channel: 'Bank Transfer',
    reference: generateReference()
  };
  addTransaction(receiver.email, receiverTransaction);

  return 'Transfer successful';
}

function addTransaction(userEmail: string, transaction: Transaction) {
  const storedTransactions = localStorage.getItem(`transactions_${userEmail}`);
  const transactions = storedTransactions ? JSON.parse(storedTransactions) : [];
  transactions.push(transaction);
  localStorage.setItem(`transactions_${userEmail}`, JSON.stringify(transactions));
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

function generateReference(): string {
  return `TXN${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
}