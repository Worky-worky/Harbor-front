import { sendMoney } from './transactions';
import { getUserByEmail, Userinfo } from '@/data/users';

// Mock data for users
const users: Userinfo[] = [
  {
    id: '1',
    email: 'sender@example.com',
    firstName: 'John',
    lastName: 'Doe',
    password: 'password123',
    role: 'user',
    accountNumber: '1234567890',
    balance: 1000,
    income: 5000,
    expenses: 2000,
    savings: 1000,
    transactions: [],
  },
  {
    id: '2',
    email: 'receiver@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    password: 'password123',
    role: 'user',
    accountNumber: '0987654321',
    balance: 500,
    income: 3000,
    expenses: 1500,
    savings: 500,
    transactions: [],
  },
];

// Mock implementation of getUserByEmail
function mockGetUserByEmail(email: string): Userinfo | undefined {
  return users.find(user => user.email === email);
}

// Override the getUserByEmail function with the mock implementation
(global as any).getUserByEmail = mockGetUserByEmail;

// Test the sendMoney function
function testSendMoney() {
  console.log('Initial balances:');
  console.log('Sender:', getUserByEmail('sender@example.com')?.balance);
  console.log('Receiver:', getUserByEmail('receiver@example.com')?.balance);

  const result = sendMoney('sender@example.com', 'receiver@example.com', 200);

  console.log('Result:', result);

  console.log('Final balances:');
  console.log('Sender:', getUserByEmail('sender@example.com')?.balance);
  console.log('Receiver:', getUserByEmail('receiver@example.com')?.balance);

  const senderTransactions = JSON.parse(localStorage.getItem('transactions_sender@example.com') || '[]');
  const receiverTransactions = JSON.parse(localStorage.getItem('transactions_receiver@example.com') || '[]');

  console.log('Sender Transactions:', senderTransactions);
  console.log('Receiver Transactions:', receiverTransactions);
}

testSendMoney();