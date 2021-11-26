## Build
docker build . -t balavigneswaran/node-app

## Run
docker run -p 49160:8080 -d balavigneswaran/node-app

docker stop <id>
docker logs <id>
docker ps
