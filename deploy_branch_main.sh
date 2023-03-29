#!/bin/sh
git fetch origin && git reset --hard origin/main && git clean -f -d
GATEWAY_PORT=8000 docker compose -f docker-compose.yml up --build -d
