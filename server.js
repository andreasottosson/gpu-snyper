import snyper from "./snyper.js";

// Import all stores here
import inet from "./stores/inet.js";
import komplett from "./stores/komplett.js";
import webhallen from "./stores/webhallen.js";

process.setMaxListeners(0);

// Print start message
console.log("GPU Snyper starting...");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Run all checks
while (true) {

  let current_sleep;
  current_sleep = 3000;

  let webhallen_count = 0;
  let inet_clound = 0;
  let komplett_count = 0;

  for (const card of webhallen.cards) {
    // Randomize sleep & "chunk"
    await sleep(current_sleep);
    snyper("WEBHALLEN", card, webhallen.selectors);
    webhallen_count++;
  }
  for (const card of inet.cards) {
    // Randomize sleep & "chunk"
    await sleep(current_sleep);
    snyper("INET", card, inet.selectors);
    inet_count++;
  }
  for (const card of komplett.cards) {
    // Randomize sleep & "chunk"
    await sleep(current_sleep);
    snyper("KOMPLETT", card, komplett.selectors);
    komplett_count++;
  }

}