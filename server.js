import snyper from "./snyper.js";

// Import all stores here
import inet from "./stores/inet.js";
import komplett from "./stores/komplett.js";
import webhallen from "./stores/webhallen.js";
import netonnet from "./stores/netonnet.js";

process.setMaxListeners(0);

// Print start message
console.log("GPU Snyper starting...");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSnyper(store) {

  // console.log(store)

  let count = 0;
  let current_sleep = 3000;

  for (const card of store.cards) {
    // Randomize sleep & "chunk"
    await sleep(current_sleep);
    snyper(store.name, card, store.selectors);
    count++;
  }
};


// Run all checks
while (true) {
  await runSnyper(netonnet);
  await runSnyper(inet);
  await runSnyper(komplett);
  await runSnyper(webhallen);

}