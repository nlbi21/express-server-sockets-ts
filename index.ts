import Server from "./src/classes/server";
import router from "./src/routes/router";

import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

//CORS
server.app.use( cors({ origin: true, credentials: true }) );

// Routes
server.app.use('/', router);

server.start(() => {
    console.log(`Server run on port: ${ server.port }`);
});