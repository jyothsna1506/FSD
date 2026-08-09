"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TicketLogic_1 = require("./TicketLogic");
const traveller = {
    name: "Suresh Kumar",
    age: 45,
    berthPreference: "Lower"
};
const myTicket = new TicketLogic_1.Ticket(traveller, 1200, 12626);
myTicket.printTicket();
//# sourceMappingURL=main.js.map