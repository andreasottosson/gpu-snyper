import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const notifier = (store, data, page_url) => { 
    (async () => {
        let api_url = "https://api.pushover.net/1/messages.json";
        let api_user = process.env.PUSHOVER_API_USER_KEY;
        let api_token = process.env.PUSHOVER_API_APP_TOKEN;
    
        let msg = {
          token: api_token,
          user: api_user,
          message: `GPU ${data[0]} found in stock @ ${store}! Price ${data[1]}.`,
          title: "GPU-Snyper",
          sound: "magic",
          device: "andy-iphone",
          url: page_url,
          url_title: "Go to store.",
        };
    
        await fetch(api_url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(msg),
        })
          .then((res) => {
            console.log("Notification sent via Pushover!");
          })
          .catch((err) => {
            console.log(e);
          });
      })();
}

export default notifier;
