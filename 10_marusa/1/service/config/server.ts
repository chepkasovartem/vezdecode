import cors from 'cors';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { EntrypointController } from "../controllers/EntrypointController";
import { config } from 'dotenv';

config();

const PORT = process.env.PORT || 80;

let expressServer = express();

const options: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
};

expressServer.use(cors(options));

useExpressServer(expressServer, {
    routePrefix: "/api",
    controllers: [
        EntrypointController
    ]
});

expressServer.listen(PORT);