import { Ticket } from "./TicketLogic";
import { Passenger } from "./Passenger";
const traveller: Passenger = {
    name: "Suresh Kumar",
    age: 45,
    berthPreference: "Lower"
};
const myTicket = new Ticket(
    traveller,
    1200,
    12626
);
myTicket.printTicket();