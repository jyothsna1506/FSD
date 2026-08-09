"use strict";
class DigitalWallet {
    constructor(name, initialDeposit, pin) {
        this.loyaltyPoints = 0;
        this.holderName = name;
        this.balance = initialDeposit;
        this.secretPin = pin;
    }
    withdrawMoney(amount, enteredPin) {
        if (this.verifyPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`${amount} withdrawn successfully. Remaining: ${this.balance}`);
            }
            else {
                console.log("Inadequate funds in your wallet!");
            }
        }
        else {
            console.log("Incorrect PIN. Transaction declined.");
        }
    }
    verifyPin(pin) {
        return this.secretPin === pin;
    }
}
class PremiumWallet extends DigitalWallet {
    addBonus() {
        this.loyaltyPoints += 100;
        console.log(`Bonus added! Total points: ${this.loyaltyPoints}`);
    }
}
const myWallet = new DigitalWallet("Durga", 5000, 1234);
console.log(`Welcome, ${myWallet.holderName}`);
myWallet.withdrawMoney(1000, 1234);
const premiumWallet = new PremiumWallet("Jyo", 10000, 5678);
premiumWallet.addBonus();
//# sourceMappingURL=2_accessmodifiers.js.map