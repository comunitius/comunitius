#!/bin/sh

docker exec -it $(docker ps -aqf "name=container_fe") npm run test