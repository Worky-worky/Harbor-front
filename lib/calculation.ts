export function calculateTotalBalance
    (income: number, expenses: number, savings: number) {
    return income - expenses - savings
  }
  
  export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }
  