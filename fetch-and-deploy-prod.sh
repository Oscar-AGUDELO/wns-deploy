#!/bin/sh
# fetch-and-deploy.sh
docker compose -f docker-compose.yml down && \
    docker compose -f docker-compose.yml pull && \
    GATEWAY_PORT=8000 docker compose -f docker-compose.yml up -d;
