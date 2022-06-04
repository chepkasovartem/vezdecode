import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { EntrypointController } from "../controllers/EntrypointController";
import { config } from 'dotenv'

config();

const PORT = process.env.PORT || 80;

let expressServer = express();

useExpressServer(expressServer, {
    routePrefix: "/api",
    controllers: [
        EntrypointController
    ]
});

expressServer.listen(PORT);