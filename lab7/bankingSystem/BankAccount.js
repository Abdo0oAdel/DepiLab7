class BankAccount {
    #accountNumber;
    #balance;
    #accountType;
    #transactionHistory;

    constructor(accountNumber, initialBalance, accountType) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.#accountType = accountType;
        this.#transactionHistory = [];
        this.#recordTransaction('Initial Deposit', initialBalance);
    }

    deposit(amount) {
        if (amount <= 0) {
            console.error('Deposit amount must be positive.');
            return;
        }
        this.#balance += amount;
        this.#recordTransaction('Deposit', amount);
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.error('Withdrawal amount must be positive.');
            return;
        }
        if (amount > this.#balance) {
            console.error('Insufficient funds.');
            return;
        }
        this.#balance -= amount;
        this.#recordTransaction('Withdrawal', amount);
    }

    getBalance() {
        return this.#balance;
    }

    getTransactionHistory() {
        return this.#transactionHistory;
    }

    transferFunds(amount, targetAccount) {
        if (!(targetAccount instanceof BankAccount)) {
            console.error('Target account must be a BankAccount instance.');
            return;
        }
        if (amount <= 0) {
            console.error('Transfer amount must be positive.');
            return;
        }
        if (amount > this.#balance) {
            console.error('Insufficient funds for transfer.');
            return;
        }
        this.#balance -= amount;
        targetAccount.#balance += amount;
        this.#recordTransaction('Transfer Out', amount);
        targetAccount.#recordTransaction('Transfer In', amount);
    }

    applyInterest(rate) {
        if (this.#accountType !== 'savings') {
            console.error('Interest can only be applied to savings accounts.');
            return;
        }
        if (rate <= 0) {
            console.error('Interest rate must be positive.');
            return;
        }
        const interest = this.#balance * rate;
        this.#balance += interest;
        this.#recordTransaction('Interest Applied', interest);
    }

    getAccountSummary() {
        return this.#generateAccountSummary();
    }

    #recordTransaction(type, amount) {
        this.#transactionHistory.push({
            type,
            amount,
            timestamp: new Date().toISOString()
        });
    }

    #generateAccountSummary() {
        return `Account Number: ${this.#accountNumber}\nBalance: $${this.#balance}\nAccount Type: ${this.#accountType}`;
    }
}

export default BankAccount;