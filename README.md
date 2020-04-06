# MERNstack application boilderplate

## Scripts :
- client : run react application
- server : run node server
- dev : run server on port 9000 and react app on port 3000

## How to use ?
- Git clone the repository
- Run npm install
- Go to client folder and run npm install
- add a .env file with a var MONGO_URI set to your mongoDB connect string
- Run npm dev to start your work


## Specialities

- Usage of SASS
- Style folder for SASS modules with config.scss
- No service workers
- Additionnal presinstalled packages : uuid, react-router-dom
- Proxy setup for react app (client requests will point to the server port)