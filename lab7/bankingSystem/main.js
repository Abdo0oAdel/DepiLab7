import BankAccount from './BankAccount.js';

const acc1 = new BankAccount('12345', 1000, 'savings');
const acc2 = new BankAccount('67890', 500, 'checking');

acc1.deposit(200);
acc1.withdraw(50);
acc1.applyInterest(0.05);
acc1.transferFunds(100, acc2);

console.log('Account 1 Summary:\n', acc1.getAccountSummary());
console.log('Account 1 Transactions:', acc1.getTransactionHistory());
console.log('Account 2 Summary:\n', acc2.getAccountSummary());
console.log('Account 2 Transactions:', acc2.getTransactionHistory());
