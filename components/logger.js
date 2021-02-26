import chalk from "chalk";
import notifier from './notifier.js';

const log = console.log;

const logger = (store, count, cards_count, data, url) => {
    function inStock(stock_val) {
        if (store === "INET" && stock_val.trim().toString() == "0 st") {
            return false;
        } else if (store === "INET" && stock_val.trim().toString() == "- st") {
            return false;
        } else if (
            store === "KOMPLETT" &&
            stock_val.trim().startsWith("Inte i lager")
        ) {
            return false;
        } else if (
            store === "KOMPLETT" &&
            stock_val.trim().startsWith("Beställningsvara")
        ) {
            return false;
        } else if (
            store === "NETONNET" &&
            stock_val.trim().startsWith("Förväntat")
        ) {
            return false;
        } else if (
            store === "NETONNET" &&
            stock_val.trim().startsWith("Lev.tid")
        ) {
            return false;
        } else if (stock_val.trim().toString() == "0") {
            return false;
        } else if (stock_val.trim().toString() == "") {
            return false;
        } else {
            return true;
        }
    }

    log(
        chalk`{${
            inStock(data[2]) ? "bgGreen" : "dim"
        } ${store} ${count}/${cards_count} ${data[0]} ${data[1]} ${data[2]}} ${
            inStock(data[2]) ? url : ""
        }`
    );

    if (inStock(data[2])) {
        log("PUSHOVER SENT");
        notifier(store, data, url);
    }
}

export default logger;
