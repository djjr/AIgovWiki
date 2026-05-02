#!/bin/bash
# Starts a local web server for the wiki viewer.
# Run this from the project root: bash serve.sh
# Then open http://localhost:8080 in your browser.

cd "$(dirname "$0")"
echo "Starting wiki server at http://localhost:8080"
echo "Press Ctrl-C to stop."
python3 -m http.server 8080
