import {AbstractCommand} from "../services/AbstractCommand";
import {ResponseModel} from "../models/ResponseModel";
import {responseFormatter} from "../decorators/response";
import {Request} from "../services/Request";
import {Response} from "../services/Response";
import {QuestionModel} from "../models/QuestionModel";
import {questions} from "../questions/questions";
import {CardModel} from "../models/CardModel";

export class QuizCommand extends AbstractCommand {

    public get name(): string {
        let name = process.env.APP_TEAM_NAME;

        return `${name} начать quiz`
    }

    public handle(request: Request): Response {
        let response = new ResponseModel()
        let question: QuestionModel = questions['js']

        response.text = ['Да начнется QUIZ', question.title]
        response.tts = 'Да начнется квиз'
        response.buttons = question.buttons
        response.commands = [question.card || new CardModel(1)]

        response.end_session = false

        return responseFormatter(response, request.session, request.version);
    }
}