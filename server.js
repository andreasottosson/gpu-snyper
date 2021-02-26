import snyper from "./components/snyper.js";
import snypergot from "./components/snyper-got.js";

// Import all stores here
import inet from "./stores/inet.js";
import komplett from "./stores/komplett.js";
import webhallen from "./stores/webhallen.js";
import netonnet from "./stores/netonnet.js";

process.setMaxListeners(0);

// Print start message
console.log("GPU Snyper starting...");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runSnyper(store) {
  let current_sleep;
  let count = 1;
  let cards_count = store.cards.length;

  for (const card of store.cards) {
    current_sleep = Math.floor(Math.random() * 15000) + 10000;
    if (store.name === 'INET') {
      snypergot(store.name, card, store.selectors, count, cards_count);
    } else {
      snyper(store.name, card, store.selectors, count, cards_count);
    }
    if (count === cards_count) { return; };
    count++;
    await sleep(current_sleep);
  }
  // Uncomment for continous loop
  //setImmediate(() => {
  //  runSnyper(store)
  //})
}

// Run all checks

runSnyper(inet);
runSnyper(netonnet);
runSnyper(komplett);
runSnyper(webhallen);