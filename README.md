# GPU-Snyper

Super rough.. Experiment with web scraping.

1. Build it
podman build -t gpu-snyper:prod .

2. Run it
podman run --rm --security-opt seccomp=chrome.json -v ./:/home/runner/app -it gpu-snyper:prod

Debug & Dev
podman run --rm --security-opt seccomp=chrome.json -v ./:/home/runner/app -it gpu-snyper:prod bash

### Notifications

- Rename .env.example -> .env and fill in your Pushover keys 
- Send these as env. variables to podman run. eg. podman run --rm -e PUSHOVER_API_USER_KEY=xxxx -e PUSHOVER_API_APP_TOKEN=xxxx --security-opt seccomp=chrome.json -v ./:/home/runner/app -it gpu-snyper:prod
