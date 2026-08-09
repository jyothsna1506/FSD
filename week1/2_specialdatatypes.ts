let flexibleValue: any = 10;
flexibleValue = "Jyothsna";
flexibleValue = true;
let mysteryValue: unknown = "Hello Jyothsna";
if (typeof mysteryValue === "string") {
    console.log("Length of unknown string: " + mysteryValue.length);
}
function logNotification(message: string): void {
    console.log("ALERT: " + message);
}
logNotification("Environment Setup Complete!");