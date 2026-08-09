"use strict";
class BankBranch {
    constructor(name, accNo) {
        this.accountHolder = name;
        this.accountNumber = accNo;
        BankBranch.totalAccountsCreated++;
    }
    static getBankPolicy() {
        console.log(`Welcome to ${this.bankName}. All FDs are subject to market risks.`);
    }
    showAccount() {
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Acc No: ${this.accountNumber}`);
    }
}
BankBranch.bankName = "HDFC Bank";
BankBranch.totalAccountsCreated = 0;
console.log(BankBranch.bankName);
BankBranch.getBankPolicy();
const user1 = new BankBranch("Jyothsna", "HDFC000123");
const user2 = new BankBranch("Durga", "HDFC000456");
user1.showAccount();
user2.showAccount();
console.log(`Total Accounts Created: ${BankBranch.totalAccountsCreated}`);
//# sourceMappingURL=3_readonly_static.js.map