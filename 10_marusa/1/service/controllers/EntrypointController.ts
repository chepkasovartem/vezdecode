import 'reflect-metadata';
import { Body, Get, JsonController, Post } from "routing-controllers";
import { RequestModel } from "../models/RequestModel";
import { ResponseModel } from "../models/ResponseModel";
import { Response } from "../services/Response";
import { responseFormatter } from "../decorators/response";

@JsonController()
export class EntrypointController {

    @Get()
    public app(): string {
        return 'Hello world'
    }

    @Post('/sayHello')
    public sayHello(@Body() request: RequestModel): ResponseModel {
        let response = new Response();

        let name = process.env.APP_TEAM_NAME;
        let regex = new RegExp(`${name} Везде код`);

        response.text = regex.test(request.request.original_utterance)
            ? 'Привет вездекодерам!'
            : `Вы ввели "${request.request.original_utterance}" Ошибка ввода`;

        return responseFormatter(response, request.session, request.version);
    }
}