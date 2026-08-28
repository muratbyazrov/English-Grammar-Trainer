#!/bin/zsh

set -e

APP_DIR="${0:A:h}"
APP_PORT="4173"

cd "$APP_DIR"
python3 -m http.server "$APP_PORT" &
SERVER_PID=$!

cleanup() {
  kill "$SERVER_PID" 2>/dev/null || true
}

trap cleanup EXIT INT TERM
sleep 0.5
open "http://localhost:${APP_PORT}/index.html"
wait "$SERVER_PID"
