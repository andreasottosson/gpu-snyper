# GPU-Snyper

Super rough.. Experiment with web scraping.

1. Build it
podman build -t gpu-snyper:prod .

2. Run it
podman run --rm --security-opt seccomp=chrome.json -v ./:/home/runner/app -it gpu-snyper:prod

Debug & Dev
podman run --rm --security-opt seccomp=chrome.json -v ./:/home/runner/app -it gpu-snyper:prod bash
