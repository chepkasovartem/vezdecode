import {AbstractCommand} from "../services/AbstractCommand";
import {Request} from "../services/Request";
import {Response} from "../services/Response";
import {ResponseModel} from "../models/ResponseModel";
import {responseFormatter} from "../decorators/response";

export class HelloCommand extends AbstractCommand {

    public get name(): string {
        let name = process.env.APP_TEAM_NAME;

        return `${name} Везде код`
    }

    public handle(request: Request): Response {
        let response = new ResponseModel();
        response.text = 'Привет вездекодерам!'
        response.end_session = true

        return responseFormatter(response, request.session, request.version);
    }
}