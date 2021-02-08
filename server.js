// Import all store logic here
import inet from "./stores/inet.js";

// Import all URLs here
import inet_cards from "./cards/inet_cards.js"

// Print start message
console.log("GPU Snyper starting...")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// Run all checks
for (const card of inet_cards) {
    await sleep(5000);
    inet(card);
}