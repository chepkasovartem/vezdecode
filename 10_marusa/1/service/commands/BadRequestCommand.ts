import {AbstractCommand} from "../services/AbstractCommand";
import {Request} from "../services/Request";
import {Response} from "../services/Response";
import {ResponseModel} from "../models/ResponseModel";
import {responseFormatter} from "../decorators/response";

export class BadRequestCommand extends AbstractCommand {

    public get name(): string {
        return "Все плохо";
    }

    public match(request: Request): boolean {
        return true
    }

    public handle(request: Request): Response {
        let response = new ResponseModel();

        response.text = `Вы ввели "${request.request.original_utterance}". Я не понимаю :(`;
        response.end_session = true

        return responseFormatter(response, request.session, request.version);
    }
}