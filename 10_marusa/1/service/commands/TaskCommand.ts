import {AbstractCommand} from "../services/AbstractCommand";
import {Request} from "../services/Request";
import {Response} from "../services/Response";
import {ResponseModel} from "../models/ResponseModel"
import {responseFormatter} from "../decorators/response";

export class TaskCommand extends AbstractCommand {

    public get name(): string {
        let name = process.env.APP_TEAM_NAME;

        return `${name} озвучь список заданий`
    }

    public handle(request: Request): Response {
        let response = new ResponseModel();

        response.text = [
            'Создайте скилл, который в ответ на запрос, содержащий название вашей команды и слово «Вездекод», ответит «Привет вездек`одерам!». Этот навык может быть текстовым.',
            'Сделайте набор из восьми разных вопросов об Айт`и, каждый из которых Маруся будет последовательно задавать собеседникам. В зависимости от количества правильных ответов рекомендуйте собеседникам подходящую категорию «Вездекода». Этот навык может быть текстовым.'
        ]
        response.tts = response.text.join(' ')
        response.end_session = true

        return responseFormatter(response, request.session, request.version);
    }
}