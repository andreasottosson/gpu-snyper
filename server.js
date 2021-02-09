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

  let current_store = store;

  //console.log(store)

  try {
    if (current_store.cards.length === 0) {
      // code that runs after the whole array is executed
    } else {
      let current_sleep = Math.floor(Math.random() * 12000) + 3000; // random value from 3s to 15s
      let current_chunk = Math.floor(Math.random() * 5) + 1; // random value from 1 to 5
    
      let store_chunk = {
        name: current_store.name,
        selectors: current_store.selectors,
        cards: current_store.cards.splice(0, current_chunk)
      }

      // console.log(store_chunk)

      for (const card of store_chunk.cards) {
        snyper(current_store.name, card, current_store.selectors);
        await sleep(current_sleep);
      }

      setImmediate(() => {
        runSnyper(current_store)   
      })
    }
  } catch(e) {
      console.warn(e);
  } 
  
};


// Run all checks
setImmediate(() => {
  runSnyper(netonnet);
  runSnyper(inet);
  runSnyper(komplett);
  runSnyper(webhallen);
});