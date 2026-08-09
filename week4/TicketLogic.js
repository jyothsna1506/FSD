"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const Constants_1 = require("./Constants");
class Ticket {
    constructor(passenger, baseFare, trainNumber) {
        this.passenger = passenger;
        this.baseFare = baseFare;
        this.trainNumber = trainNumber;
    }
    calculateFinalFare() {
        const taxAmount = this.baseFare * Constants_1.GST_RATE;
        return this.baseFare + taxAmount + Constants_1.CONVENIENCE_FEE;
    }
    printTicket() {
        console.log("E-Ticket Confirmed");
        console.log(`Passenger: ${this.passenger.name} (${this.passenger.age})`);
        console.log(`Train No: ${this.trainNumber}`);
        console.log(`Total Fare: ${this.calculateFinalFare()}`);
        console.log("--------------------------");
    }
}
exports.Ticket = Ticket;
//# sourceMappingURL=TicketLogic.js.map